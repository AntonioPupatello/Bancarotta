import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';
=======
>>>>>>> origin/antonio

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterModule, LayoutComponent, LoginComponent, SigninComponent,ButtonsComponent,MatButtonModule,CommonModule,NgIf],
=======
  imports: [RouterOutlet, RouterModule],
>>>>>>> origin/antonio
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bank-project';
  isLoginVisible: boolean = false;
  isSigninVisible: boolean = false;

  showLogin() {
    this.isLoginVisible = true;
    this.isSigninVisible = false;
  }

  showSignin() {
    this.isLoginVisible = false;
    this.isSigninVisible = true;
  }
}
