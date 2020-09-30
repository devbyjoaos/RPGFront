import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { UserInfo } from 'src/app/login/login-objects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userInfo = new UserInfo();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.userInfo = this.loginService.getLoggedUser();
   }

   logout() {
     this.loginService.logout();
     window.location.reload();
   }

   goToConfiguration() {
     this.router.navigate(['/configuracao']);
   }

}
