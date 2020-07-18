import { Component, OnInit } from '@angular/core';
import { LoginDto } from './login-objects';

import { Router } from '@angular/router';
import { LoginService } from '../auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDto = new LoginDto();
  logou: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginClick(){
    this.loginService.login(this.loginDto).subscribe(
      result => {
        if (result){
          this.router.navigate(['dale']);
        }
      }
    );


  }

}
