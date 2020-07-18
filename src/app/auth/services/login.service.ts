import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginDto, Tokens } from 'src/app/login/login-objects';
import { catchError, mapTo, tap } from 'rxjs/operators';




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
  private loggedUser: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.options.headers = new HttpHeaders()
      .set('no-error', 'true')
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.options.responseType = 'json';
  }

  public login(user: LoginDto): Observable<boolean> {
    return this.httpClient.post<any>('http://localhost:8080/autenticar', user)
    .pipe(
      tap(tokens => this.doLoginUser(user.nickname, tokens)),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  public logout() {
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

  public doLoginUser(nickname: string, tokens: Tokens){
    this.loggedUser = nickname;
    this.storeTokens(tokens);
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  public storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  public removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.JWT_TOKEN);
  }

  refreshToken() {
    return this.httpClient.post<any>(`http://localhost:8080/refresh`, {
      refreshToken: this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.token);
    }));
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public getRefreshToken(){
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

}
