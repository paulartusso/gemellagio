import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, startWith, switchMap } from 'rxjs';

// Keeps <title> and <meta name="description"> in the visitor's language.
@Injectable({ providedIn: 'root' })
export class PageTitleService {
  private readonly key$ = new BehaviorSubject<string>('');

  constructor(
    private readonly translate: TranslateService,
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    const langChange$ = this.translate.onLangChange.pipe(startWith(null));
    combineLatest([this.key$, langChange$])
      .pipe(
        switchMap(([key]) =>
          this.translate.get(
            ['META.SITE_NAME', 'META.DESCRIPTION', key].filter(Boolean)
          )
        )
      )
      .subscribe((t: Record<string, string>) => {
        const key = this.key$.value;
        const site = t['META.SITE_NAME'];
        this.title.setTitle(key ? `${t[key]} · ${site}` : site);
        this.meta.updateTag({ name: 'description', content: t['META.DESCRIPTION'] });
      });
  }

  // Empty key = home page: the title is just the site name.
  setKey(key: string): void {
    this.key$.next(key);
  }
}
