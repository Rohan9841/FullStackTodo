import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants'

export class AuthenticationBean {
  constructor(
    public message: string
  ) { }
}

export const TOKEN = 'authenticationToken';
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/auth/basicAuth`, { headers: header }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN,basicAuthHeaderString)
          return data
        }
      )
    )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticationToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    if (user != null) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}
