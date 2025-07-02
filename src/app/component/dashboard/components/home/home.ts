import { Component } from '@angular/core';
import { Todo as TodoService } from '../../../../shared/todo';
import { Todo  } from '../../../../shared/todo.model';
import { Auth } from '../../../../shared/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
  todos : Todo[] = [];
 constructor (private todoService : TodoService , private auth : Auth){}
 ngOnInit(){
  const userID =this.auth.getUserId()
  if(userID)
  {
   this.todoService.getTodos(userID).subscribe((todos)=>{
    this.todos = todos as Todo[];
   });
  }

 }


 setTodoCompleted(todoId: string){
  this.todoService.setTodoCompleted(todoId);
 }
}
