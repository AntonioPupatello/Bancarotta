import { Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { HomeComponent } from './pages/components/home/home.component';
import { SignupComponent } from './pages/components/signup/signup.component';
import { InitialpageComponent } from './pages/components/initialpage/initialpage.component';
import { BanktransferComponent } from './pages/components/banktransfer/banktransfer.component';
import { RegulationsComponent } from './pages/components/regulations/regulations.component';
import { UsersComponent } from './pages/components/users/users.component';
import { UserDetailComponent } from './pages/components/user-detail/user-detail.component';


export const routes: Routes = [
    { path: 'signup',component: SignupComponent },
    { path: 'login',component: LoginComponent },
    { path: '',component: HomeComponent },
    { path:'login/user',component: InitialpageComponent },
    {path:'user/transfer',component:BanktransferComponent},
    { path: 'regulations',component: RegulationsComponent },
    { path: '',component: HomeComponent },
    {path:'users',component:UsersComponent},
    {path:'users/:id',component:UserDetailComponent}
]