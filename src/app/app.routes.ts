import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';


export const routes: Routes = [
    { path: 'signup',component: SignupComponent },
    { path: 'login',component: LoginComponent },
    { path: '',component: HomeComponent }
]