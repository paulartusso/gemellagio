import { AppLanguage } from '../services/translation.service';

export interface MediaArticle {
  id: number;
  // Country where the event took place; drives the badge colour and label.
  country: AppLanguage;
  // Translation key prefix: <key>.TITLE and <key>.BODY live under MEDIA.ARTICLES.
  key: string;
  image: string;
}

export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: 1,
    country: 'fr',
    key: 'MEDIA.ARTICLES.CARNEVALE',
    image: 'assets/img/media/carnival.webp',
  },
  {
    id: 2,
    country: 'it',
    key: 'MEDIA.ARTICLES.SUNFLOWERS',
    image: 'assets/img/media/sunflowers.webp',
  },
  {
    id: 3,
    country: 'de',
    key: 'MEDIA.ARTICLES.STADT',
    image: 'assets/img/media/stadt-fest.webp',
  },
];

export function findArticle(id: number): MediaArticle | undefined {
  return MEDIA_ARTICLES.find((a) => a.id === id);
}
