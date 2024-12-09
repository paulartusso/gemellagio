import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Everience-IT';
  
  scrollUp(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    })
  }
  
}
