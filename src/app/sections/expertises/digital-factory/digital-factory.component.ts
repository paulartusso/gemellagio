import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-factory',
  templateUrl: './digital-factory.component.html',
  styleUrls: ['./digital-factory.component.scss']
})
export class DigitalFactoryComponent implements OnInit {
  
  scrollUp(){
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
  })

}
ngOnInit(){
  this.scrollUp()
}
}

