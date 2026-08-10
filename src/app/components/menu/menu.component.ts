import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppLanguage, TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router,
    private readonly translation: TranslationService
  ) {}

  isShowing: boolean = false;
  showCases: boolean = false;
  showMobileCases: boolean = false;
  currentTab: string = 'home';
  showLanguageOptions: boolean = false;

  setActiveTab(tabName: string): void {
    this.currentTab = tabName;
  }

  showMenu() {
    this.isShowing = !this.isShowing;
  }

  showStudyCases(screen: string) {
    if (screen == 'mobile') {
      this.showMobileCases = !this.showMobileCases;
    }
    if (screen == 'desktop') {
      this.showCases = !this.showCases;
    }
  }

  closeStudyCases() {
    this.showCases = false;
  }

  showLanguages() {
    this.showLanguageOptions = !this.showLanguageOptions;
  }

  goToFooter() {
    this.closeStudyCases();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  navigateTo(url: string) {
    this.closeStudyCases();
    this.setActiveTab(url);
    this.router.navigate([url]);
    this.isShowing = false;
  }

  get currentLang(): AppLanguage {
  return this.translation.current;
}
 
// Add these methods:
otherLanguages(): AppLanguage[] {
  return this.translation.supported.filter((l) => l !== this.currentLang);
}
 
flagIcon(lang: AppLanguage): string {
  const icons: Record<AppLanguage, string> = {
    it: '../../../assets/icons/italy.png',
    de: '../../../assets/icons/germany.png',
    fr: '../../../assets/icons/france.png',
  };
  return icons[lang];
}

selectLanguage(lang: AppLanguage): void {
  this.translation.use(lang);
  this.showLanguageOptions = false;
}

}
