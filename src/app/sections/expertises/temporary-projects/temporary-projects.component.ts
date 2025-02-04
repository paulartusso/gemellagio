import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporary-projects',
  templateUrl: './temporary-projects.component.html',
  styleUrls: ['./temporary-projects.component.scss'],
})
export class TemporaryProjectsComponent implements OnInit {
  cards = [
    {
      cardTitle: 'Plan',
      description:
        'Implementazione di un sistema di tracciabilità e gestione efficace degli asset, monitorandone il ciclo di vita in tempo reale. Questo include la gestione di etichettatura, inventario, gestione preventiva e la programmazione di servizi periodici per garantire efficienza e continuità operativa.',
      img: '../../../assets/task.png',
      color: '#009DDC',
      border: '9px solid #009DDC',
    },
    {
      cardTitle: 'Procedure',
      description:
        "Creazione di policy e procedure standarizzate per la gestione e la tracciabilità degli asset, garantendo che ogni fase del ciclo di vita, dall'arrivo presso la sede del cliente, all'utilizzo da parte del personale, alla custodia da un fornitore esterno, fino alla dimissione, segua protocolli definiti",
      img: '../../../assets/planning.png',
      color: '#FAB716',
      border: '9px solid #FAB716',
      bottom: '1px solid #FAB716',
    },
    {
      cardTitle: 'Protection',
      description:
        "La sicurezza e la protezione nell'Asset Lifecycle Management (ALM) sono fondamentali per prevenire violazioni dei dati e garantire la sicurezza degli asset durante tutto il loro ciclo di vita. Procedure di sicurezza rigorose, come la sanificazione dei dati e la distruzione certificata, proteggono informazioni sensibili e riducono i rischi operativi.",
      img: '../../../assets/secure-data.png',
      color: '#DD0555',
      border: '9px solid #DD0555',
      bottom: '1px solid #DD0555',
    },
  ];

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit() {
    this.scrollUp();
  }
}
