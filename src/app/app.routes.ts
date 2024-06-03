import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: 'signin',component: SigninComponent },
    { path: 'login',component: LoginComponent },
    { path: '',component: HomeComponent }
]