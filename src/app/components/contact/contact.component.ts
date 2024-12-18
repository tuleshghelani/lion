import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackbarService: SnackbarService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      this.emailService.sendContactEmail(this.contactForm.value)
        .subscribe({
          next: (response) => {
            this.snackbarService.showSuccess('Message sent successfully!');
            this.contactForm.reset();
          },
          error: (error) => {
            this.snackbarService.showError('Failed to send message. Please try again.');
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
    }
  }
}