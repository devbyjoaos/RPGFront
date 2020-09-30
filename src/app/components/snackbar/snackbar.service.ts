import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  success(message: string, action: string = 'Fechar', duration: number = 3000) {
    this.snackBar.open(message, action, { duration, panelClass: ['success-snackbar'] });
  }
  warning(message: string, action: string = 'Fechar', duration: number = 3000) {
    this.snackBar.open(message, action, { duration, panelClass: ['warn-snackbar'] });
  }
  error(message: string, action: string = 'Fechar', duration: number = 3000) {
    this.snackBar.open(message, action, { duration, panelClass: ['error-snackbar'] });
  }

}
