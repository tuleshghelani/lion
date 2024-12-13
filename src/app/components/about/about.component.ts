import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  downloadBrochure() {
    const pdfUrl = 'assets/PDF/sugarcane_juice_machine.pdf';
    window.open(pdfUrl, '_blank');
  }
}
