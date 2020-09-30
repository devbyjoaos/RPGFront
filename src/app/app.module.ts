import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './auth/services/login.service';
import { AuthModule } from './auth/auth.module';
import { OverviewService } from './overview/services/overview.service';
import { RegisterComponent } from './login/register/register.component';
import { CharacterComponent } from './user-settings/character/character.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [LoginService, OverviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
