import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sviluppo-card',
  templateUrl: './sviluppo-card.component.html',
  styleUrls: ['./sviluppo-card.component.scss']
})
export class SviluppoCardComponent {
@Input() cardTitle = '';
  @Input() description = '';
  @Input() img = '';
}
