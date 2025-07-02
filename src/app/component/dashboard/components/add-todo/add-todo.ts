import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../../shared/auth';
import { inject } from '@angular/core';
import { Todo } from '../../../../shared/todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
})
export class AddTodo {
  title :string = '';
  description :string = '';
   
  constructor(private auth : Auth , private todoService : Todo) {}

  addTodo (){
    console.log(this.title,this.description);
    const userID = this.auth.getUserId();
    if(userID)
    {
    this.todoService.addTodo(this.title, this.description, userID);
    this.title = '';
    this.description  = ''
    }
    else{
      console.log("UserID is null");
    }
  }
}
