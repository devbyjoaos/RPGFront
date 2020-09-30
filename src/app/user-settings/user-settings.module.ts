import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { AppModule } from '../app.module';
import { CharacterComponent } from './character/character.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { UserConfigutarionComponent } from './user-configutarion/user-configutarion.component';



@NgModule({
  declarations: [ConfigurationComponent, CharacterComponent, UserConfigutarionComponent],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
    ComponentsModule,
    RouterModule
  ]
})
export class UserSettingsModule { }
