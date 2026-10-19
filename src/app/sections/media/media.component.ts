import { Component } from '@angular/core';
import { MEDIA_ARTICLES, MediaArticle } from '../../data/media-articles';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  readonly articles: MediaArticle[] = MEDIA_ARTICLES;
}
