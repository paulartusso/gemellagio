import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-study-item',
  templateUrl: './case-study-item.component.html',
  styleUrls: ['./case-study-item.component.scss']
})
export class CaseStudyItemComponent {
  @Input() cardTitle = '';
  @Input() cardSubtitle = '';
  @Input() description = '';
  @Input() img = '';
  @Input() color = '';
  @Input() border = '';
}
