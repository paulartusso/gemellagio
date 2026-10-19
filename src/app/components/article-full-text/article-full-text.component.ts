import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findArticle, MediaArticle } from '../../data/media-articles';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-article-full-text',
  templateUrl: './article-full-text.component.html',
  styleUrls: ['./article-full-text.component.scss'],
})
export class ArticleFullTextComponent implements OnInit {
  article?: MediaArticle;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pageTitle: PageTitleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.article = findArticle(Number(params.get('id')));
      this.pageTitle.setKey(this.article ? `${this.article.key}.TITLE` : 'MEDIA.NOT_FOUND');
    });
  }
}
