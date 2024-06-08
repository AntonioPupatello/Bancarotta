import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { RegulationsComponent } from './pages/regulations/regulations.component';


export const routes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'signin',component: SigninComponent },
    { path: 'login',component: LoginComponent },
    { path: 'regulations',component: RegulationsComponent },
]