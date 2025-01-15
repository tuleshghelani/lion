import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maximizing-juice-yield',
  templateUrl: './maximizing-juice-yield.component.html',
  styleUrls: ['./maximizing-juice-yield.component.scss']
})
export class MaximizingJuiceYieldComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  downloadGuide(): void {
    // Implement download functionality
    console.log('Downloading technical guide...');
  }
} 