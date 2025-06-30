import { Component } from '@angular/core';
import { Auth } from '../../shared/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {

email: string = '';
password: string = '';

constructor(private auth: Auth) {}

 login(){
  if (this.email == '' || this.password == '') {
    alert('Please fill in all fields');
    return;
  }
  this.auth.login(this.email, this.password);
  this.email = '';
  this.password = '';

}
}
