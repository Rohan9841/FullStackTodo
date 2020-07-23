import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwtAuthHeaderString = this.jwtAuthenticationService.getAuthenticationToken();
    let username = this.jwtAuthenticationService.getAuthenticatedUser();

    if (username && jwtAuthHeaderString) {
      req = req.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }
}
