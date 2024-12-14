import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.scss']
})
export class DealershipComponent {
  dealershipForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dealershipForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
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

  onSubmit() {
    if (this.dealershipForm.valid) {
      console.log(this.dealershipForm.value);
      // Add your form submission logic here
    }
  }
}