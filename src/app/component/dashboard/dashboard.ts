import { Component } from '@angular/core';
import { Auth } from '../../shared/auth';
import { RouterOutlet , RouterLink , RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
})
export class Dashboard {
constructor(private auth : Auth){}

SignOut()
{
  this.auth.signOut();
}
}
