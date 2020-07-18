import { Component, OnInit } from '@angular/core';
import { DaleService } from './services/dale.service';
@Component({
  selector: 'app-dale',
  templateUrl: './dale.component.html',
  styleUrls: ['./dale.component.scss']
})
export class DaleComponent implements OnInit {

  constructor(
    private daleService: DaleService
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  public logout(){
    this.daleService.ver().subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
