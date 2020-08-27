import { Component, OnInit } from '@angular/core';
import { DaleService } from './services/dale.service';
import { LoginService } from '../auth/services/login.service';
@Component({
  selector: 'app-dale',
  templateUrl: './dale.component.html',
  styleUrls: ['./dale.component.scss']
})
export class DaleComponent implements OnInit {

  constructor(
    private daleService: DaleService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.daleService.ver().subscribe(result =>{
      console.log(result)});
  }

  public logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
