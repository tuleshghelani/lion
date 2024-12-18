import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.scss']
})
export class DealershipComponent {
  dealershipForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackbarService: SnackbarService
  ) {
    this.dealershipForm = this.fb.group({
      name: ['John Doe', [Validators.required, Validators.minLength(3)]],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      mobile: ['9876543210', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      company: ['ABC Trading Co.', Validators.required],
      address: ['123 Business Street', Validators.required],
      city: ['Mumbai', Validators.required],
      state: ['Maharashtra', Validators.required],
      businessType: ['retail', Validators.required],
      experience: ['3-5', Validators.required],
      investmentCapacity: ['6-20', Validators.required],
      storageFacilities: ['yes', Validators.required],
      showroomFacilities: ['yes', Validators.required],
      transportFacilities: ['yes', Validators.required],
      message: ['Interested in becoming a dealer for your premium sugarcane machines.']
    });
  }

  onSubmit() {
    if (this.dealershipForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      this.emailService.sendDealershipEmail(this.dealershipForm.value)
        .subscribe({
          next: (response) => {
            this.snackbarService.showSuccess('Dealership application submitted successfully!');
            // this.dealershipForm.reset();
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