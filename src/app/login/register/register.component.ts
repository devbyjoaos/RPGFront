import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from '../login-objects';
import { LoginService } from 'src/app/auth/services/login.service';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerDto = new RegisterDto();
  repeatPassword: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackbar: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['login']);
  }

  passwordMatch() {
    return this.registerDto.password === this.repeatPassword;
  }

  registerNewUser() {
    this.loginService.registerUser(this.registerDto).subscribe(dale => {
      this.snackbar.success('Registrado com sucesso');
      this.router.navigate(['login']);
    }, error => {
      this.snackbar.error(error.error.message);
    }
      );
  }

}
