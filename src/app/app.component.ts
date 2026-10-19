import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PageTitleService } from './services/page-title.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showScrollButton = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pageTitle: PageTitleService,
    // Injected here so the language (and <html lang>) is set before the first render.
    private readonly translation: TranslationService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        let child = this.route.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        const key = child?.snapshot.data['titleKey'];
        // Routes without a titleKey (e.g. articles) set their own title.
        if (key !== undefined) {
          this.pageTitle.setKey(key);
        }
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollButton = window.scrollY > 600;
  }

  scrollUp(): void {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  }
}
