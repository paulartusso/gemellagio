import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workplace-management-card',
  templateUrl: './workplace-management-card.component.html',
  styleUrls: ['./workplace-management-card.component.scss']
})
export class WorkplaceManagementCardComponent {
  @Input() cardTitle = '';
  @Input() description = '';
  @Input() img = '';
  @Input() color= '';
  @Input() border= '';
  @Input() bottom = '';
}
