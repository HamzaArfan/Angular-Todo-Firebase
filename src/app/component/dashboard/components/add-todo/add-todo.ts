import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../../shared/auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
})
export class AddTodo {
  title :string = '';
  description :string = '';

  constructor(private auth : Auth){}

  addTodo (){
    console.log(this.title,this.description);
    const userID = this.auth.getUserId();
    const userEmail = this.auth.getUserEmail();
    console.log (`User ID: ${userID} , User Email: ${userEmail}`);

  }
}
