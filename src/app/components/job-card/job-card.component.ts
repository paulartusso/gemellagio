import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
  openDescription: boolean = false;
  expandedCard: boolean = false;

  applyForm: any = FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.applyForm = this.fb.group({
      // Other form controls
      file: [null, Validators.required],
    });
  }

  showDescription() {
    this.openDescription = !this.openDescription;
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
