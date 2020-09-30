import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
})
export class LoginErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginErrorComponent>) { }

  ngOnInit(): void {
  }

  public close(){
    this.dialogRef.close();
  }

}
