import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-business-startup',
  templateUrl: './business-startup.component.html',
  styleUrls: ['./business-startup.component.scss']
})
export class BusinessStartupComponent implements OnInit {
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

  downloadBusinessPlan() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
}