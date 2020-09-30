import { Component, OnInit } from '@angular/core';
import { OverviewService } from './services/overview.service';
import { LoginService } from '../auth/services/login.service';
@Component({
  selector: 'app-dale',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private overviewService: OverviewService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  public logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
