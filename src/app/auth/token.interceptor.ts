import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { LoginService } from './services/login.service';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { nextTick } from 'process';
import { Router } from '@angular/router';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public loginService: LoginService,
    private router: Router){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.getJwtToken()){
      const token = this.loginService.getJwtToken();
      const authReq = request.clone({
        setHeaders: {
         Authorization: `Bearer ${token}`
        }
      });
      return next
              .handle(authReq)
              .pipe(
                catchError(error => this.handleError(error)),
              )
      ;
    }
    return next.handle(request);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
