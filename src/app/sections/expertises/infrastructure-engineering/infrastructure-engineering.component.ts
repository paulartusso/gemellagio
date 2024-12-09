import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-engineering',
  templateUrl: './infrastructure-engineering.component.html',
  styleUrls: ['./infrastructure-engineering.component.scss']
})
export class InfrastructureEngineeringComponent implements OnInit{
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
