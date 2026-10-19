import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AppLanguage = 'it' | 'de' | 'fr';

const SUPPORTED_LANGUAGES: AppLanguage[] = ['it', 'fr', 'de'];
const STORAGE_KEY = 'app-language';
const DEFAULT_LANGUAGE: AppLanguage = 'it';

// BCP 47 locales used for number formatting.
const LOCALES: Record<AppLanguage, string> = {
  it: 'it-IT',
  fr: 'fr-FR',
  de: 'de-DE',
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLang$ = new BehaviorSubject<AppLanguage>(
    this.resolveInitialLanguage()
  );

  readonly language$: Observable<AppLanguage> = this.currentLang$.asObservable();

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.translate.addLangs(SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.use(this.currentLang$.value);
  }

  get current(): AppLanguage {
    return this.currentLang$.value;
  }

  get supported(): AppLanguage[] {
    return SUPPORTED_LANGUAGES;
  }

  get locale(): string {
    return LOCALES[this.current];
  }

  use(lang: AppLanguage): void {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      return;
    }
    this.translate.use(lang);
    // Screen readers, hyphenation and spell-checkers rely on the document language.
    this.document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this visit.
    }
    this.currentLang$.next(lang);
  }

  private resolveInitialLanguage(): AppLanguage {
    let stored: AppLanguage | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
    } catch {
      stored = null;
    }
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }

    const browserLang = navigator.language?.slice(0, 2) as AppLanguage;
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }

    return DEFAULT_LANGUAGE;
  }
}
