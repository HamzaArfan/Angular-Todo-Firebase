import { Injectable, inject } from '@angular/core';
import { Auth as FirebaseAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private fireauth = inject(FirebaseAuth);
  private router = inject(Router);

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.fireauth, email, password).then((result) => {
      localStorage.setItem("userId", result.user.uid)
      localStorage.setItem("userEmail",result.user.email || '');
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);
    }, err => {
      alert(`Something went wrong ${err.message}`);
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.fireauth, email, password).then(() => {
      this.router.navigate(['/login']);
      alert("Registration successful");
    }, err => {
      alert(`Failed to register User ${err.message}`);
      this.router.navigate(['/register']);
    })
  }

  signOut() {
    signOut(this.fireauth).then(() => {
      alert("User Sucessfully Signed Out")
      localStorage.removeItem("token");
      this.router.navigate(['/'])
    }, err => {
      alert(`Failed to Sign Out: ${err.message}`);
      this.router.navigate(['dashboard']);
    })
  }

  getUserId()
  {
     return localStorage.getItem("userId");
  }

  getUserEmail(){
    return localStorage.getItem("userEmail")
  }
}