import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  jobId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.jobId = +this.route.snapshot.paramMap.get('id')!;
    console.log('Job ID:', this.jobId);
  }
}
