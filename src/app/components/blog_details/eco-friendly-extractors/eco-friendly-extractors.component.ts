import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-eco-friendly-extractors',
  templateUrl: './eco-friendly-extractors.component.html',
  styleUrls: ['./eco-friendly-extractors.component.scss']
})
export class EcoFriendlyExtractorsComponent implements OnInit {
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

  downloadBrochure() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
} 