import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeName: string = "";
  welcomeMessageFromService: string = "";
  errorMessage: string ="";

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.welcomeName = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithPathVariable(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.welcomeName).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.errorMessage = "";
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = "";
    this.errorMessage = error.error.message;
  }
}
