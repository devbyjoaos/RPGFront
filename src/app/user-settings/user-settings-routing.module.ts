import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RandomGuard } from '../auth/guards/random.guard';
import { CharacterComponent } from './character/character.component';
import { UserConfigutarionComponent } from './user-configutarion/user-configutarion.component';



const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    canActivate: [RandomGuard],
    canLoad: [RandomGuard],
    children: [
      {
        path: '',
        component: UserConfigutarionComponent,
        canActivate: [RandomGuard],
        canLoad: [RandomGuard]
      },
      {
        path: 'personagens',
        component: CharacterComponent,
        canActivate: [RandomGuard],
        canLoad: [RandomGuard]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
