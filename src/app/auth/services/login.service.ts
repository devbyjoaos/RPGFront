import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginDto, Tokens, LoginInfo, UserInfo, RegisterDto } from 'src/app/login/login-objects';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { logWarnings } from 'protractor/built/driverProviders';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginErrorComponent } from 'src/app/components/login-error/login-error.component';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  private options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: any;
    withCredentials?: boolean;
  } = {};

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly LOGGED_USER = 'LOGGED_USER';
  private loggedUser: UserInfo;

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog,
    public snackbar: SnackBarService
  ) {
    this.options.headers = new HttpHeaders()
      .set('no-error', 'true')
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.options.responseType = 'json';
  }

  public login(user: LoginDto): Observable<boolean> {
    return this.httpClient.post<any>('http://localhost:8080/autenticar', user)
    .pipe(
      tap(info => this.doLoginUser(info.userInfo , info.tokens)),
      mapTo(true),
      catchError(error => {
        this.snackbar.error('Usuário ou senha inválidos.');
        return of(false);
      })
    );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  public logout() {
    this.doLogoutUser();
    return this.httpClient.post<any>('http://localhost:8080/sair', {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    );
  }

  public doLoginUser(loginInfo: UserInfo, tokens: Tokens){
    this.loggedUser = loginInfo;
    this.storeLoggedUser(this.loggedUser);
    this.storeTokens(tokens);
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeLoggedUser();
    this.removeTokens();
  }

  public storeTokens(tokens: Tokens) {
    sessionStorage.setItem(this.JWT_TOKEN, tokens.token);
    sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  public storeLoggedUser(userInfo: UserInfo) {
    sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(userInfo));
  }

  public removeLoggedUser() {
    sessionStorage.removeItem(this.LOGGED_USER);
  }

  public removeTokens() {
    sessionStorage.removeItem(this.JWT_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }

  refreshToken() {
    return this.httpClient.post<any>(`http://localhost:8080/refresh`, {
      refreshToken: this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.token);
    }));
  }

  private storeJwtToken(jwt: string) {
    sessionStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public getJwtToken(){
    return sessionStorage.getItem(this.JWT_TOKEN);
  }

  public getRefreshToken(){
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  public getLoggedUser(){
    return JSON.parse(sessionStorage.getItem(this.LOGGED_USER));
  }

  public registerUser(registerDto: RegisterDto): Observable<void>{
    return this.httpClient.post<void>('http://localhost:8080/registrar', registerDto);
  }

}
