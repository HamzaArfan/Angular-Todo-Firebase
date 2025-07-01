import { Component } from '@angular/core';
import { Todo } from '../../../../shared/todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-delete-todos',
  imports: [FormsModule],
  templateUrl: './delete-todos.html',
})
export class DeleteTodos {
  constructor(private todo : Todo){}
  todoId:string = '';

  deleteTodo()
  {
  
  this.todo.deleteTodos(this.todoId);
  this.todoId = '';
  }

}
