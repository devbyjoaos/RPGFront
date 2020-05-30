import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DaleComponent } from './dale/dale.component';


const routes: Routes = [
  {
  path: '',
  component: LoginComponent,
  },
  {
    path: 'dale',
    component: DaleComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
