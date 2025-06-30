import { Component } from '@angular/core';
import { Auth } from '../../shared/auth';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
})
export class Dashboard {
constructor(private auth : Auth){}

SignOut()
{
  this.auth.signOut();
}
}
