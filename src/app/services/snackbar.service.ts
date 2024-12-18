import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SnackbarData {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarSubject = new Subject<SnackbarData>();
  snackbar$ = this.snackbarSubject.asObservable();

  showSuccess(message: string) {
    this.snackbarSubject.next({ message, type: 'success' });
  }

  showError(message: string) {
    this.snackbarSubject.next({ message, type: 'error' });
  }
} 