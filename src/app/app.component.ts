import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ButtonComponent } from './components/button/button.component';
=======
>>>>>>> antonio

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterModule, LayoutComponent, HomeComponent, LoginComponent, SigninComponent, ButtonComponent],
=======
  imports: [RouterOutlet, RouterModule],
>>>>>>> antonio
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bank-project';
}
