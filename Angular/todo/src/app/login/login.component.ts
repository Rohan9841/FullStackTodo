import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';
import{ BasicAuthenticationService } from './../service/basic-authentication.service';
import { JwtAuthenticationService } from './../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "Rohan";
  password:string = "";
  errorMessage:string = "invalid username or password";
  validLogin:boolean = true;

  constructor(
    private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.validLogin = true;
      this.router.navigate(["welcome",this.username]);
    }else{
      this.validLogin = false;
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response),
        this.router.navigate(['welcome',this.username])
      },
      error =>{
        console.log(error),
        this.validLogin = false;
      } 
    )
  }

  handleJwtAuthLogin(){
    this.jwtAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      response=>{
        console.log(response),
        this.router.navigate(['welcome',this.username])
      },
      error=>{
        console.log(error),
        this.validLogin = false;
      }
    )
  }
}
