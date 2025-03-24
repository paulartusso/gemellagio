import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1200ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class MediaComponent {
  constructor(private router: Router) {}

  articlesList: any = [
    {
      id: 1,
      category: 'Case History',
      title: "Supporto per l'implementazione IT negli Stati Uniti",
      description:
        "Everience ha recentemente supportato l'implementazione dell'infrastruttura IT presso un cliente in due nuove sedi negli Stati Uniti: uno store a Miami e un ufficio a Hollywood. L'obiettivo era garantire una configurazione efficace per l’apertura dello store il 1° novembre e completare una site survey per l’ufficio. Una criticità chiave emersa fin dall’inizio è stata la mancanza di connettività in fibra ottica nei tempi previsti. Per ovviare al problema, è stato adottato un router modem 5G come soluzione temporanea, integrato alla rete LAN. La necessità di reperire rapidamente l’hardware necessario ha incontrato ostacoli logistici, tra cui la scadenza della nostra partnership con Cisco per l’acquisto diretto di dispositivi Meraki. Dopo aver coinvolto diversi partner, abbiamo trovato supporto in Soteria365, che ha fornito hardware e risorse sul campo tramite il loro partner USA. Tuttavia, il router inizialmente proposto non era compatibile con il 5G e solo dopo un’attenta revisione tecnica è stato sostituito con il modello corretto. La site survey sullo store di Miami è stata condotta dai Field Engineer del partner USA, supportati in remoto dal nostro team. Parallelamente, il cliente si è occupato del network cabinet e del cablaggio. Il nostro team ha seguito da vicino l'intervento: Moroni ha gestito le priorità tecniche e le soluzioni operative, mentre Pellegrini ha coordinato i fornitori per evitare costi extra e garantire che le soluzioni venissero recepite efficacemente dai tecnici locali. Il 28 ottobre, una call preliminare ha permesso di definire i dettagli delle attività, tra cui l'installazione e configurazione del router 5G, degli switch e degli access point Meraki. Tuttavia, il giorno successivo sono emerse nuove difficoltà: l'accesso al router ha richiesto ore di lavoro a causa della scarsa preparazione del personale locale e la SIM fornita era incompatibile con il dispositivo. Questo ha richiesto soluzioni rapide, come l’acquisto di un router alternativo da Verizon. Anche l'installazione degli access point ha subito ritardi a causa di errori sul campo e della necessità di negoziare con il Point of Contact del cliente. Nonostante gli imprevisti, la maggior parte delle attività è stata completata, lasciando solo alcune marginali per il giorno di hypercare del 1° novembre. Questo progetto ha evidenziato la capacità di Everience di affrontare sfide operative e logistiche, garantendo reattività e flessibilità nella gestione degli imprevisti. Le lezioni apprese suggeriscono l’importanza di ridurre le incertezze operative, testare preventivamente le soluzioni di connettività e standardizzare le procedure. La combinazione di competenza tecnica, coordinamento efficace e spirito di squadra ha permesso di superare le difficoltà e rafforzare la fiducia dei nostri clienti e partner.",
      image: '../../../assets/img/veryfile.jpg',
    },
    {
      id: 2,
      category: 'News Aziendali',
      title: "Yoga dopo il lavoro: un'opportunità per il benessere in azienda",
      description:
        "In Everience Italia, abbiamo sempre creduto che un ambiente di lavoro sano e positivo dipenda anche dal benessere delle persone che lo compongono. Per questo motivo, grazie al contributo di ciascun collaboratore, abbiamo introdotto una nuova iniziativa: una lezione di yoga post-lavoro aperta a tutti i colleghi.Lo yoga non è solo un'attività fisica; è uno strumento efficace per migliorare la concentrazione, ridurre lo stress e migliorare il benessere complessivo. La pratica regolare aiuta a sviluppare una maggiore consapevolezza del corpo e della mente, promuovendo una postura migliore e un approccio più rilassato alle sfide quotidiane. Per chi trascorre lunghe ore alla scrivania, rappresenta un'opportunità per rilasciare la tensione accumulata e prevenire disagi muscolari. Lo stress è uno dei fattori più significativi che influenzano la qualità della vita lavorativa e la produttività. Orari frenetici, scadenze stringenti e responsabilità quotidiane possono generare sovraccarico mentale, che, nel tempo, incide negativamente sulla concentrazione e sulla motivazione. Grazie alle tecniche di respirazione e agli esercizi di rilassamento, lo yoga offre un modo concreto per ripristinare l'equilibrio tra corpo e mente, aiutando a gestire la pressione in modo più efficace. Ridurre lo stress non solo migliora le prestazioni lavorative, ma favorisce anche le capacità decisionali e un approccio più positivo alle sfide. Oltre ai benefici individuali, questa attività rafforza anche il senso di appartenenza e il lavoro di squadra. Condividere un momento al di fuori dell'ambiente lavorativo consente ai colleghi di creare nuove connessioni, rafforzando la dinamica di gruppo e contribuendo a un ambiente di lavoro più collaborativo. Un team sereno e coeso lavora in maggiore armonia, riducendo i conflitti e aumentando l'efficienza complessiva. Questa iniziativa è un esempio concreto di come, con un piccolo sforzo collettivo, possiamo migliorare la qualità della vita lavorativa. Prendersi cura del nostro benessere significa investire non solo in noi stessi, ma anche in un ambiente di lavoro più equilibrato e produttivo.",
      image: '../../../assets/img/yoga.jpg',
    },
    {
      id: 3,
      category: 'Case History',
      title:
        'Implementazione di una Rete Wireless presso un Centro Produttivo a Madrid',
      description:
        "In un contesto produttivo moderno, la connettività wireless è un elemento essenziale per supportare una gestione efficiente e sicura dei processi aziendali. Abbiamo recentemente completato un progetto di implementazione di una rete wireless per un nostro cliente presso un centro produttivo a Madrid, superando con successo le complessità strutturali e operative del sito. Questo progetto ha richiesto una pianificazione precisa e il coordinamento tra diversi team per garantire una realizzazione impeccabile. Il progetto si è concentrato su tre attività principali, ciascuna eseguita con attenzione alle specifiche tecniche e logistiche del cliente: Cablaggio Ethernet: Una delle prime fasi è stata il cablaggio dai vari armadi di distribuzione ai punti di installazione degli access point. Data la struttura del centro produttivo e le particolari condizioni operative, il cablaggio è stato realizzato in quota e durante le ore di attività. Questo ha richiesto attrezzature adeguate e l'applicazione di rigorose misure di sicurezza. Installazione degli Access Point: Una volta completato il cablaggio, abbiamo provveduto all'installazione degli access point in punti strategici per assicurare una copertura wireless ottimale e continuativa in tutto il centro. Grazie alla mappatura preliminare delle aree di copertura, l’installazione è avvenuta in maniera fluida, garantendo che la rete fosse pronta per le prove di performance e per l'eventuale fase di ottimizzazione. Fornitura di 'Smart Hands': Abbiamo fornito supporto “smart hands” come integrazione al team network del cliente, per assistere con interventi tecnici puntuali e assicurare un monitoraggio in tempo reale durante le fasi di testing e avviamento. Questo supporto ha permesso al team del cliente di affrontare le prime fasi di utilizzo della rete wireless con la massima sicurezza e senza interruzioni. Il progetto ha presentato diverse criticità che hanno messo alla prova le nostre capacità di gestione e coordinamento, tutte affrontate con un approccio di project management solido e proattivo. Struttura Complessa del Centro La complessità dell'edificio, con aree operative in quota e ampi spazi industriali, ha richiesto una mappatura accurata dei percorsi e dei punti di installazione, oltre che una valutazione delle modalità di intervento in sicurezza durante le ore di attività produttiva. Tempistiche e Coordinamento delle Attività: Realizzare il cablaggio e l'installazione senza interrompere le operazioni del cliente è stato un aspetto delicato. Abbiamo definito un piano di lavoro preciso, adattando le attività alle tempistiche specifiche della struttura, e suddiviso le operazioni in slot temporali concordati, evitando qualsiasi interferenza con i processi produttivi. Coordinamento Multiteam: La gestione del progetto ha richiesto un coordinamento tra il nostro team, il partner cablatore, e il team del cliente. Abbiamo applicato un metodo di project management collaborativo, pianificando incontri periodici e utilizzando un sistema di tracciamento delle attività in tempo reale. Questo ci ha permesso di mantenere una comunicazione chiara, di monitorare costantemente i progressi e di intervenire prontamente per risolvere eventuali criticità. Un aspetto tecnico particolarmente rilevante di questo progetto ha riguardato la richiesta specifica del cliente di un cablaggio in fibra ottica tra alcuni armadi principali, completato da cablaggio Ethernet tra questi e i punti di installazione degli access point. La fibra ottica, essendo il mezzo di trasmissione principale in termini di capacità e velocità di trasferimento, offre una qualità di connessione superiore e consente alla rete di sostenere le elevate richieste di dati. Per garantire la massima affidabilità, le tratte in fibra dovevano essere ridondate e installate su due percorsi distinti. Questa scelta progettuale è fondamentale per assicurare continuità di servizio anche in caso di guasto o interruzione su uno dei percorsi. Grazie alla ridondanza, la rete ha una via di comunicazione alternativa, prevenendo downtime e mantenendo attive tutte le operazioni produttive, un requisito cruciale in ambienti industriali in cui ogni minuto di inattività può comportare costi elevati e disservizi significativi. Questo progetto testimonia la nostra capacità di realizzare infrastrutture di rete complesse, anche in ambienti che richiedono elevata flessibilità e attenzione alle esigenze operative del cliente. Grazie alla competenza tecnica e alla nostra esperienza nella gestione di progetti network “access”, siamo riusciti a completare l'implementazione della rete wireless presso il centro produttivo di Madrid nei tempi previsti e con piena soddisfazione del cliente. La nostra abilità nel project management e nell'adattamento a contesti specifici è ciò che ci rende un partner affidabile per ogni tipo di implementazione di rete.",
      image: '../../../assets/img/rete.jpg',
    },
  ];
  openFullArticle(id: number) {
    this.router.navigate(['media/full-article', id]);
    console.log(id);
  }
}
