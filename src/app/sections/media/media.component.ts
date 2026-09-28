import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { AppLanguage } from '../../services/translation.service';

export interface MediaArticle {
  id: number;
  country: AppLanguage; // which country the event/story took place in
  titleKey: string;
  descriptionKey: string;
  image: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1200ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class MediaComponent {
  constructor(private router: Router) {}

  // Placeholder stories — swap image paths and translation keys/content
  // with real ones. "country" drives the badge shown on each card.
  articlesList: MediaArticle[] = [
    {
      id: 1,
      country: 'fr', // Carnevale in Francia
      titleKey: 'MEDIA.ARTICLES.CARNEVALE.TITLE',
      descriptionKey: 'MEDIA.ARTICLES.CARNEVALE.DESCRIPTION',
      image: '../../../assets/img/media/stadt-fest.jpg',
    },
    {
      id: 2,
      country: 'it', // TODO: confirm actual country — placeholder guess
      titleKey: 'MEDIA.ARTICLES.SUNFLOWERS.TITLE',
      descriptionKey: 'MEDIA.ARTICLES.SUNFLOWERS.DESCRIPTION',
      image: '../../../assets/img/media/sunflowers.jpg',
    },
  ];

  openFullArticle(id: number) {
    this.router.navigate(['media/full-article', id]);
  }
}