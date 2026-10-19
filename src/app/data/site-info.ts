// Association details shown in the header, footer and contacts page.
// Leave a field empty ('') to hide it: nothing placeholder-like is ever rendered.
export interface SiteInfo {
  name: string;
  town: string;
  postalCode: string;
  province: string;
  street: string;
  email: string;
  phone: string;
  fiscalCode: string;
  social: { facebook: string; instagram: string };
}

export const SITE_INFO: SiteInfo = {
  name: 'Gemellaggio Filottrano · Kuppenheim · Raon-l’Étape',
  town: 'Filottrano',
  postalCode: '60024',
  province: 'AN',
  street: '',
  email: '',
  phone: '',
  fiscalCode: '',
  social: {
    facebook: '',
    instagram: '',
  },
};

export function mapsUrl(info: SiteInfo): string {
  const query = [info.street, `${info.postalCode} ${info.town}`, 'Italia']
    .filter(Boolean)
    .join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
