import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegulationsComponent } from './pages/regulations/regulations.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'signin',component: SigninComponent },
  { path: 'login',component: LoginComponent },
  { path: 'regulations',component: RegulationsComponent },
  { path: 'users',component: UsersComponent },
  { path: 'users/:id',component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
