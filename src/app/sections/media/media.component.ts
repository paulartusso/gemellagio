import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  constructor(private router: Router) {}

  articlesList: any = [
    {
      category: 'Case History',
      title: "Supporto a Veryfile per l'implementazione IT negli Stati Uniti",
      description:
        "Everience è stata recentemente coinvolta in un progetto sfidante e stimolante con Veryfile, che ci ha contattato per supportare l'implementazione dell'infrastruttura IT presso il cliente finale in due nuove sedi negli Stati Uniti: uno store a Miami e un ufficio a Hollywood. L'obiettivo era...",
      image: '../../../assets/veryfile.png',
    },
    {
      category: 'Case History',
      title: 'ARTICULO RANDOM EJEMPLO LOREM IPSUM DOLOOOOT',
      description:
        "Everience è stata recentemente coinvolta in un progetto sfidante e stimolante con Veryfile, che ci ha contattato per supportare l'implementazione dell'infrastruttura IT presso il cliente finale in due nuove sedi negli Stati Uniti: uno store a Miami e un ufficio a Hollywood. L'obiettivo era...",
      image: '../../../assets/example-img.jpg',
    },
    {
      category: 'News Aziendali',
      title: 'ARTICULO RANDOM para color categoria y porque ta bonito ta',
      description:
        "Everience è stata recentemente coinvolta in un progetto sfidante e stimolante con Veryfile, che ci ha contattato per supportare l'implementazione dell'infrastruttura IT presso il cliente finale in due nuove sedi negli Stati Uniti: uno store a Miami e un ufficio a Hollywood. L'obiettivo era...",
      image: '../../../assets/example-img-2.jpg',
    },
  ];
  openFullArticle() {
    this.router.navigate(['media/full-article']);
    console.log(this.articlesList[1].descrption);
  }
}
