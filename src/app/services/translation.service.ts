import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AppLanguage = 'it' | 'de' | 'fr';

const SUPPORTED_LANGUAGES: AppLanguage[] = ['it', 'de', 'fr'];
const STORAGE_KEY = 'app-language';
const DEFAULT_LANGUAGE: AppLanguage = 'it';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLang$ = new BehaviorSubject<AppLanguage>(
    this.resolveInitialLanguage()
  );

  readonly language$: Observable<AppLanguage> = this.currentLang$.asObservable();

  constructor(private readonly translate: TranslateService) {
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

  use(lang: AppLanguage): void {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      return;
    }
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.currentLang$.next(lang);
  }

  private resolveInitialLanguage(): AppLanguage {
    const stored = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
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