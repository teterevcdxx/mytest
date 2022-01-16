
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifier: MatSnackBar) {

   }

  public showMessage(message: string){
    this.notifier.open(message, '', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 700
    });
  }
}
