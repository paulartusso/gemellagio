import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/services/job.services';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  private scrollInterval: any;
  contactForm: FormGroup;
  responseMessage: string = '';
  isDragOver = false;
  uploadedFile: File | null = null;
  sendingMail: boolean = false;
  showOffers: boolean = false;
  showCarousel: boolean = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private jobService: JobService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: '',
    });
  }
  ngOnInit(): void {
    this.getAllJobs();
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

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    const scrollSpeed = 1;
    const scrollDelay = 30;

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

  jobsList: any = [];
  getAllJobs(): void {
    this.jobService.getJobs().subscribe(
      (data: any) => {
        this.jobsList = data;
        console.log('Jobs fetched:', this.jobsList);
      },
      (error: any) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }
}
