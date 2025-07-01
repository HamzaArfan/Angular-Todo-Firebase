import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : Auth , private router:Router) { }
  canActivate() : boolean 
  {
    console.log("AuthGuard Here");
    const isLoggedIn = this.auth.getUserId() != null;
    console.log(isLoggedIn)
    if(isLoggedIn)
      {
        return true;
      }
      else
      {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
