import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  private scrollInterval: any;
  contactForm: FormGroup;
  responseMessage: string = '';
  isDragOver = false;
  uploadedFile: File | null = null;
  sendingMail: boolean = false;
  showOffers: boolean = false;
  showCarousel: boolean = true;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: '',
    });
  }

  showAllOffers() {
    this.showOffers = true;
    this.showCarousel = false;
    clearInterval(this.scrollInterval);
  }

  backToCarousel() {
    this.showOffers = false;
    this.showCarousel = true;
    this.startAutoScroll();
  }

  jobsList: any = [
    {
      role: 'Full-Stack Developer',
      company: 'Everience',
      adress: 'Via Italo Calvino',
      seniority: 'Middle',
      contract_type: 'A tempo indeterminato',
      description:
        'Developer junior, per sviluppo siti vetrina in contesto blablabla lorem ipsum dolor dshfjdfshdhfj dsf dsjkfhjd hfjkdsh kfla.',
      ral: null,
      frontend_tech: ['React', 'Vue.js'],
      backend_tech: [
        'Django (Python)',
        'Flask (Python)',
        'Ruby on Rails (Ruby)',
      ],
      devops_requirements: [],
      db_requirements: ['Ruby on Rails (Ruby)', 'Spring Boot (Java)'],
    },
    {
      role: 'Frontend Developer',
      company: 'Everience',
      adress: 'Viale Monza, 12',
      seniority: 'Junior',
      contract_type: 'A tempo determinato',
      description:
        'Developer junior, per sviluppo siti vetrina in contesto blablabla lorem ipsum dolor',
      ral: 32000,
      frontend_tech: ['React', 'Vue.js', 'SASS/SCSS', 'jQuery'],
      backend_tech: [],
      devops_tech: [],
      db_tech: [],
    },
    {
      role: 'Backend Developer',
      company: 'Everience',
      adress: 'Viale Monza, 12',
      seniority: 'Middle',
      contract_type: 'A tempo indeterminato',
      description:
        'Profilo asi asa, minimo tres anios de experiencia, blaplaplaplaa',
      ral: 25000,
      frontend_tech: [],
      backend_tech: ['Node.js', 'Express.js'],
      devops_tech: ['Docker'],
      db_tech: ['MySQL'],
    },
    {
      role: 'Frontend Developer',
      company: 'Everience',
      adress: 'Viale Monza, 12',
      contract_type: 'Stage',
      seniority: 'Junior',
      description: 'Profilo asi asa, minimo tres anios de experiencia, bla',
      ral: null,
      frontend_tech: ['React', 'Vue.js'],
      backend_tech: ['Node.js', 'Express.js'],
      devops_tech: [],
      db_tech: ['MySQL', 'Firebase'],
    },
    {
      role: 'Frontend Developer',
      company: 'Everience',
      adress: 'Viale Monza, 12',
      seniority: 'Senior',
      contract_type: 'A tempo determinato',
      description: 'Profilo asi asa, minimo tres anios de experiencia, bla',
      ral: 21200,
      frontend_tech: ['React', 'Vue.js'],
      backend_tech: ['Node.js', 'Express.js'],
      devops_tech: [],
      db_tech: ['MySQL'],
    },
    {
      role: 'Backend Developer',
      company: 'Everience',
      adress: 'Viale Monza, 12',
      seniority: 'Middle',
      contract_type: 'A tempo indeterminato',
      description:
        'Profilo asi asa, minimo tres anios de experiencia, blaplaplaplaa',
      ral: 25000,
      frontend_tech: [],
      backend_tech: ['Node.js', 'Express.js'],
      devops_tech: ['Docker'],
      db_tech: ['MySQL', 'MongoDB'],
    },
  ];

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    const scrollSpeed = 1; // Adjust speed (px per interval)
    const scrollDelay = 30; // Adjust interval in ms

    this.scrollInterval = setInterval(() => {
      const carousel = this.carousel.nativeElement;
      carousel.scrollLeft += scrollSpeed;

      // Reset scroll to the start when reaching the end
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      }
    }, scrollDelay);
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval);
  }
}
