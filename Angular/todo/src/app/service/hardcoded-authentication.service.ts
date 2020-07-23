import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean{
    if(username === "Rohan9841" && password === "Rohan9841"){
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem("authenticatedUser");
    if(user != null){
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
