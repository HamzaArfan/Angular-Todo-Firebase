import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { Dashboard } from './component/dashboard/dashboard';
export const routes: Routes = [

    {path:"", redirectTo:'login', pathMatch:'full' },
    {path:'login' , component:Login},
    {path:'dashboard', component:Dashboard},
    {path:'register',component:Register}
];
