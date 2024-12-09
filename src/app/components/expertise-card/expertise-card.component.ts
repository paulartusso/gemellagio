import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.scss']
})
export class ExpertiseCardComponent {
  @Input() cardTitle = '';
  @Input() firstItem = '';
  @Input() secondItem = '';
  @Input() thirdItem = '';
  @Input() img: string = '';
  @Input() url: string = '';

   constructor(private router: Router,){} 

  navigateTo(url: string){
    this.router.navigate([url]);
  }
}
