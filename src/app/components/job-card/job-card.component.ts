import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input() id = 0;
  @Input() role = '';
  @Input() company = '';
  @Input() location = '';
  @Input() description = '';
  @Input() seniority = '';
  @Input() contract = '';
  @Input() ral = 0;
  @Input() frontend_tech = [];
  @Input() backend_tech = [];
  @Input() devops_tech = [];
  @Input() db_tech = [];
  @Input() cardIsOpen = false;
  @Input() apply!: (id: number) => void;
  openDescription: boolean = false;
  expandedCard: boolean = false;

  applyForm: any = FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.applyForm = this.fb.group({
      // Other form controls
      file: [null, Validators.required],
    });
  }

  showDescription() {
    this.openDescription = !this.openDescription;
  }

  jobApplication() {
    console.log(this.id, 'fghfghfg');
    this.apply(this.id);
  }

  close() {
    this.expandedCard = false;
  }

  expandCard() {
    console.log('expand');
    this.expandedCard = true;
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.applyForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.http.post('/upload', formData).subscribe(
        (response) => {
          console.log('File uploaded successfully!', response);
        },
        (error) => {
          console.error('File upload failed!', error);
        }
      );
    }
  }
}
