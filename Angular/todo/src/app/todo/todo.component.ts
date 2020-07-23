import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo
  buttonClicked: boolean = false;
  emptyFormErrorMessage = "Please fill all the boxes";
  descriptionErrorMessage = "Description must at least be 5 characters long";
  targetDateErrorMessage = "Please choose a target date";

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id,"",false,null);
    if(this.id > 0){
      this.todoService.retrieveTodo(this.jwtAuthenticationService.getAuthenticatedUser(),this.id).subscribe(
        response => {
          this.todo = response;
        }
      )
    }
    
  }

  saveTodo(){
    if(this.id > 0){
      this.todoService.updateTodo(this.jwtAuthenticationService.getAuthenticatedUser(),this.id,this.todo).subscribe(
        response=>{
          console.log(response);
          this.router.navigate(["todos"]);
        }
      )
    }else{
      this.todoService.addTodo(this.jwtAuthenticationService.getAuthenticatedUser(),this.todo).subscribe(
        response=>{
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
