import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent {
contactForm: FormGroup;
responseMessage: string = '';
isDragOver = false;
uploadedFile: File | null = null;
sendingMail: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: '',
    });
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadedFile = event.dataTransfer.files[0];
      this.uploadCV(this.uploadedFile); // Call your upload logic here
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      this.uploadCV(this.uploadedFile); // Call your upload logic here
    }
  }

  uploadCV(file: File) {
    console.log('Uploading file:', file.name);
    // Add your upload logic here
  }

  onSubmit() {
  if (this.contactForm.valid && this.uploadedFile) {
    const formData = new FormData();
    formData.append('name', this.contactForm.value.name);
    formData.append('surname', this.contactForm.value.surname);
    formData.append('email', this.contactForm.value.email);
    formData.append('message', this.contactForm.value.message);
    formData.append('file', this.uploadedFile);

    this.sendingMail = true; // Show the loading gif

    this.http.post('/api/send-email', formData).subscribe({
      next: () => {
        this.responseMessage = 'Grazie per contattarci, riceverai una risposta il prima possibile';
      },
      error: () => {
        this.responseMessage = "C'è stato un errore, riprova più tardi";
      },
      complete: () => {
        this.sendingMail = false; // Hide the loading gif when the request completes
      }
    });

    // Clear the form field after submission
    this.contactForm.reset();
  } else {
    this.responseMessage = 'Compila tutti i campi e carica il CV prima di inviare.';
  }
}

}
