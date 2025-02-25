import { CommonModule } from '@angular/common';
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

  selectedFrontendStacks: string[] = [];
  selectedBackendStacks: string[] = [];
  selectedDevopsStacks: string[] = [];
  selectedDBStacks: string[] = [];

  editForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      ruolo: ['', Validators.required],
      azienda: ['', Validators.required],
      indirizzo: [''],
      seniority: ['', Validators.required],
      descrizione: ['', Validators.required],
      frontendStacks: [''],
      backendStacks: [''],
      devopsStacks: [''],
      dbStacks: [''],
      altroStack: [''],
      remunerazione: [''],
    });
  }

  showDescription() {
    this.openDescription = !this.openDescription;
  }

  close() {
    this.cardIsOpen = false;
  }

  modify(): void {
    if (this.editForm.valid) {
      console.log(
        'Form submitted:',
        this.editForm.value,
        this.selectedFrontendStacks
      );
    } else {
      console.log('Form is not valid');
    }
  }

  expandCard() {
    console.log('expand');
  }
}
