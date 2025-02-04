import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Everience-IT';
  showScrollButton = true;
  private hiddenRoutes = ['/contacts', '/join-us'];

  constructor(private router: Router) {}

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showScrollButton = !this.hiddenRoutes.includes(event.url);
      }
    });
  }
}
