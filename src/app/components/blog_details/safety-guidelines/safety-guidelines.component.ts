import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-safety-guidelines',
  templateUrl: './safety-guidelines.component.html',
  styleUrls: ['./safety-guidelines.component.scss']
})
export class SafetyGuidelinesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 400,
      once: true,
      mirror: false,
      offset: 50,
      delay: 0,
      disable: window.innerWidth < 768
    });
  }

  downloadSafetyManual() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
} 