import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'bank-project';
  constructor(private authService: AuthService){}

 if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'))
  this.authService.createUser(user.email, user.id, user._token)
 }

 onLogout(){
  this.authService.Logout()
 }
}
