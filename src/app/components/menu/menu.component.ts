import { Component, HostListener } from '@angular/core';
import { AppLanguage, TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuOpen = false;

  readonly links = [
    { path: '/home', label: 'NAV.ABOUT' },
    { path: '/products', label: 'NAV.PRODUCTS' },
    { path: '/media', label: 'NAV.MEDIA' },
    { path: '/contacts', label: 'NAV.CONTACT' },
  ];

  // Language names are always shown in their own language.
  readonly languages: { code: AppLanguage; name: string }[] = [
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ];

  constructor(private readonly translation: TranslationService) {}

  get currentLang(): AppLanguage {
    return this.translation.current;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  selectLanguage(lang: AppLanguage): void {
    this.translation.use(lang);
  }
}
