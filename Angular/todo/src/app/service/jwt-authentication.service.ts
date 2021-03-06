import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';

export const TOKEN = 'authenticationToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username: string, password: string){
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }
    ).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,username),
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
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
