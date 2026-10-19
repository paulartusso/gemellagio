// Verifies that it/fr/de translation files have exactly the same keys,
// that no value is empty or a leftover placeholder, and that every
// literal key used in the app exists. Run with: npm run check:i18n
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LANGS = ['it', 'fr', 'de'];
const I18N_DIR = 'src/assets/i18n';
const APP_DIR = 'src/app';

const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v)
      ? flatten(v, `${prefix}${k}.`)
      : [[`${prefix}${k}`, v]]
  );

const files = Object.fromEntries(
  LANGS.map((l) => [l, new Map(flatten(JSON.parse(readFileSync(join(I18N_DIR, `${l}.json`), 'utf8'))))])
);

const errors = [];
const reference = files.it;

for (const lang of LANGS) {
  const keys = files[lang];
  for (const k of reference.keys()) if (!keys.has(k)) errors.push(`${lang}: missing ${k}`);
  for (const k of keys.keys()) if (!reference.has(k)) errors.push(`${lang}: extra ${k}`);
  for (const [k, v] of keys) {
    const values = Array.isArray(v) ? v : [v];
    if (values.some((x) => typeof x !== 'string' || !x.trim())) errors.push(`${lang}: empty ${k}`);
    if (values.some((x) => /TODO|lorem|__/i.test(String(x)))) errors.push(`${lang}: placeholder in ${k}`);
    if (Array.isArray(v) && Array.isArray(reference.get(k)) && v.length !== reference.get(k).length)
      errors.push(`${lang}: ${k} has ${v.length} items, it has ${reference.get(k).length}`);
  }
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(html|ts)$/.test(p) ? [p] : [];
  });

// Full literal keys such as 'NAV.MEDIA'. Prefixes built at runtime
// (e.g. 'MEDIA.COUNTRY.' + country) end with a dot and are skipped.
for (const file of walk(APP_DIR)) {
  for (const [, key] of readFileSync(file, 'utf8').matchAll(/'([A-Z][A-Z_]+(?:\.[A-Z0-9_]+)+)'/g)) {
    if (!reference.has(key) && ![...reference.keys()].some((k) => k.startsWith(`${key}.`))) {
      errors.push(`${file}: unknown key ${key}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`i18n OK: ${reference.size} keys in ${LANGS.join(', ')}`);
