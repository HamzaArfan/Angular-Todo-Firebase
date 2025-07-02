import { inject, Injectable } from '@angular/core';
import { collection, Firestore ,addDoc, deleteDoc, doc , query, where, collectionData, Timestamp, updateDoc } from '@angular/fire/firestore';
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
      createdAt: Timestamp.now(),
      completed: false
    }
    addDoc(this.todoCollection , todoData).then(()=>
    {
      alert("Todo Added Sucessfully");
    }, err =>
    {
alert("failed to add todo")
    });
  }
  deleteTodos(todoId: string)
  {  
    deleteDoc(doc(this.todoCollection , todoId)).then(()=>{
      alert("Todo Deleted Successfully");
    }, err => {
      alert(`Failed to Delete Todo: ${err.message}`);
    });
  }

  getTodos(userId : string)
  {
    const getUserTodos = query(this.todoCollection , where ('userId','==', userId));
    const dataTodo= collectionData(getUserTodos , {idField: 'id'});
    console.log(getUserTodos);
    console.log(dataTodo);
    return dataTodo;
  }


  setTodoCompleted(todoID: string){
    const todoRef = doc(this.todoCollection, todoID);
    updateDoc(todoRef, {completed:true});



  }

}
