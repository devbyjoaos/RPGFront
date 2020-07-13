import { Component, OnInit } from '@angular/core';
import { LoginDto } from './login-objects';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

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
    console.log(this.loginDto);
    this.loginService.findByIdOrDenomination(this.loginDto).subscribe(
      result =>{
        if(result){
          this.router.navigate(['dale']);
        }
      }
    );


  }

}
