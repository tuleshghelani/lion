import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-market-trends',
  templateUrl: './market-trends.component.html',
  styleUrls: ['./market-trends.component.scss']
})
export class MarketTrendsComponent implements OnInit {
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

  downloadReport() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
} 