import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegulationsComponent } from './pages/regulations/regulations.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { PageAccountDetailComponent } from './pages/page-account-detail/page-account-detail.component';
import { PageAccountNewComponent } from './pages/page-account-new/page-account-new.component';
import { NewComponent } from './pages/new/new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regulations', component: RegulationsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'account', component: PageAccountComponent },
  { path: 'account/:id', component: PageAccountDetailComponent },
  { path: 'account/new', component: NewComponent },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
