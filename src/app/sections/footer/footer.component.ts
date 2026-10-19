import { Component } from '@angular/core';
import { mapsUrl, SITE_INFO } from '../../data/site-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly info = SITE_INFO;
  readonly mapsUrl = mapsUrl(SITE_INFO);
  readonly phoneHref = 'tel:' + SITE_INFO.phone.replace(/[^\d+]/g, '');
  readonly year = new Date().getFullYear();
}
