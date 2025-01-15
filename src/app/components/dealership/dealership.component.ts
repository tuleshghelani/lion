import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SnackbarService } from '../../services/snackbar.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.scss']
})
export class DealershipComponent {
  dealershipForm: FormGroup;
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
    this.dealershipForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: [this.selectedCountryCode, Validators.required],
      mobile: ['', [Validators.required]],
      company: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      businessType: ['', Validators.required],
      experience: ['', Validators.required],
      investmentCapacity: ['', Validators.required],
      storageFacilities: ['', Validators.required],
      showroomFacilities: ['', Validators.required],
      transportFacilities: ['', Validators.required],
      message: ['']
    });
  }

  onCountryChange(event: any) {
    this.selectedCountryCode = event.target.value;
  }

  onSubmit() {
    if (this.dealershipForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const formData = {
        ...this.dealershipForm.value
      };
      
      this.emailService.sendDealershipEmail(formData)
        .subscribe({
          next: (response) => {
            this.snackbarService.showSuccess('Dealership application submitted successfully!');
            this.dealershipForm.reset();
          },
          error: (error) => {
            this.snackbarService.showError('Failed to submit application. Please try again.');
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
    }
  }
}