import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {
  show = false;
  message = '';
  type: 'success' | 'error' = 'success';
  private subscription: Subscription;

  constructor(private snackbarService: SnackbarService) {
    this.subscription = this.snackbarService.snackbar$.subscribe(data => {
      this.message = data.message;
      this.type = data.type;
      this.showSnackbar();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private showSnackbar() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
} 