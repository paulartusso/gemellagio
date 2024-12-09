import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logistica-item',
  templateUrl: './logistica-item.component.html',
  styleUrls: ['./logistica-item.component.scss']
})
export class LogisticaItemComponent {
  @Input() position: string='';
  @Input() height: string='';
  @Input() top: string='';
  @Input() url: string='';
  @Input() imgPosition: string='';
  @Input() textPosition: string='';
  @Input() title: string='';
  @Input() description: string='';
}
