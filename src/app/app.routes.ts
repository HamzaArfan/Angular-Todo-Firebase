import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { Dashboard } from './component/dashboard/dashboard';
import { Home } from './component/dashboard/components/home/home';
import { AddTodo } from './component/dashboard/components/add-todo/add-todo';
import { DeleteTodos } from './component/dashboard/components/delete-todos/delete-todos';
export const routes: Routes = [

    {path:"", redirectTo:'login', pathMatch:'full' },
    {path:'login' , component:Login},
    {path:'dashboard', component:Dashboard,
     children :
    [
        {path:'home' , component:Home},
        {path:'add-todo', component:AddTodo},
        {path:'delete-todo',component:DeleteTodos}
    ]
    },
    {path:'register',component:Register}
];
