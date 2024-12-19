import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SnackbarService } from '../../services/snackbar.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  countries: any[];
  selectedCountryCode: string = '+91'; // Default to India

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackbarService: SnackbarService,
    private countryService: CountryService
  ) {
    this.countries = this.countryService.getCountries();
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: [this.selectedCountryCode, Validators.required],
      phone: ['', [Validators.required]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onCountryChange(event: any) {
    this.selectedCountryCode = event.target.value;
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const formData = {
        ...this.contactForm.value
      };
      
      this.emailService.sendContactEmail(formData)
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