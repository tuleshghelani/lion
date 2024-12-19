import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-essential-maintenance-tips',
  templateUrl: './essential-maintenance-tips.component.html',
  styleUrls: ['./essential-maintenance-tips.component.scss']
})
export class EssentialMaintenanceTipsComponent implements OnInit {
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
