import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router,){}

  isShowing: boolean=false;
  showCases: boolean=false;
  currentTab: string = 'home'; 
  showLanguageOptions: boolean =false;

  setActiveTab(tabName: string): void {
    this.currentTab = tabName;
  }
  
  showMenu(){
    this.isShowing = !this.isShowing;
  }

  showStudyCases(){
    this.showCases = !this.showCases;
  }

  closeStudyCases(){
    this.showCases = false;
  }

  showLanguages(){
    this.showLanguageOptions = !this.showLanguageOptions;
  }

  goToFooter(){
    this.closeStudyCases();
    window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
    })
  }

  navigateTo(url: string){
    this.closeStudyCases();
    this.setActiveTab(url)
    this.router.navigate([url]);
  }
}
