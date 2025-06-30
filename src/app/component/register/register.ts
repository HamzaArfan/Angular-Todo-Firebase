import { Component } from '@angular/core';
import { Auth } from '../../shared/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
})
export class Register {
  email: string = '';
  password: string = '';  
  constructor(private auth: Auth) {}
  register() { 
    if (this.email == '' || this.password == '') {
      alert('Please fill in all fields');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}