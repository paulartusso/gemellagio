import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital-factory-card',
  templateUrl: './digital-factory-card.component.html',
  styleUrls: ['./digital-factory-card.component.scss']
})
export class DigitalFactoryCardComponent {
  @Input() cardTitle = '';
  @Input() description = '';
  @Input() img = '';
}
