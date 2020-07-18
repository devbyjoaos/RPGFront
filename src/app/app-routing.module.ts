import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RandomGuard } from './auth/guards/random.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
  path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard]
  },
  {
    path: 'dale',
    loadChildren: () => import('./dale/dale.module').then(m => m.DaleModule),
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
