import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workplace-management',
  templateUrl: './workplace-management.component.html',
  styleUrls: ['./workplace-management.component.scss']
})
export class WorkplaceManagementComponent implements OnInit {
  cards=[
    {
      cardTitle: 'Suporto agli utenti finali',
      description: 'Everience offre assistenza continua per problemi IT, migliorando la produttività degli utenti. Il service desk multilingue risolve rapidamente le richieste a livello globale.',
      img: '../../../assets/handshake.png',
      color: '#009DDC',
      border: '9px solid #009DDC',
      bottom: '1px solid #009DDC'
    },
    {
      cardTitle: 'Industrializzazione dei servizi IT',
      description: 'L\'azienda ottimizza i processi IT attraverso automazione estandardizzazione, riducendo costi e migliorando l\'efficienza operativa.',
      img: '../../../assets/technical-support.png',
      color: '#FAB716',
      border: '9px solid #FAB716',
      bottom: '1px solid #FAB716'
    },
    {
      cardTitle: 'Suporto geografico',
      description: 'Everience fornisce supporto globale con una rete di filialie partner, coprendo 8 paesi e parlando 25 lingue per assistenza ovunque.',
      img: '../../../assets/globe.png',
      color: '#DD0555',
      border: '9px solid #DD0555',
      bottom: '1px solid #DD0555'
    }
  ];

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
