import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  personagens: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
  }

  goToOvervie() {
    window.history.back();
  }

  changeMenu(menu: string) {
    switch (menu) {
      case 'character':
        this.router.navigate(['configuracao', 'personagens'], {relativeTo: this.route.root});
        this.personagens = true;
        break;
      default:
        this.router.navigate(['configuracao'], {relativeTo: this.route.root});
    }
  }

}
