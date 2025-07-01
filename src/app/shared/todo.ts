import { inject, Injectable } from '@angular/core';
import { collection, Firestore ,addDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Todo as TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class Todo 
{

  private firestore = inject (Firestore);
  private todoCollection = collection(this.firestore, 'todos');

  constructor() { }

  addTodo(title: string , description: string , userId: string)
  {
    const todoData :Omit <TodoModel, 'id'> = {
      title,
      description,
      userId,
      createdAt: new Date(),
      completed: false
    }
    addDoc(this.todoCollection , todoData);

  }
  deleteTodos(todoId: string)
  {  
    deleteDoc(doc(this.todoCollection , todoId)).then(()=>{
      alert("Todo Deleted Successfully");
    }, err => {
      alert(`Failed to Delete Todo: ${err.message}`);
    });
  }

  getTodos()
  {
  
  }


}
