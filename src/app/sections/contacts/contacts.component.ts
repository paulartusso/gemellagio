import { Component } from '@angular/core';
import { mapsUrl, SITE_INFO } from '../../data/site-info';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  readonly info = SITE_INFO;
  readonly mapsUrl = mapsUrl(SITE_INFO);
  readonly phoneHref = 'tel:' + SITE_INFO.phone.replace(/[^\d+]/g, '');
}
