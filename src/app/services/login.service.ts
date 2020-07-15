import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../login/login-objects';



@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public findByIdOrDenomination(filter: LoginDto): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:8080/autenticar', filter);
  }
}
