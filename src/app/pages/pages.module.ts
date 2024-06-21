import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { SigninComponent } from './signin/signin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegulationsComponent,
    SigninComponent,
    UserDetailComponent,
    UsersComponent,
    ExchangeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports:[
    /*
    HomeComponent,
    LoginComponent,
    RegulationsComponent,
    SigninComponent,
    UserDetailComponent,
    UsersComponent,
    ExchangeComponent,
    */
  ]
})
export class PagesModule { }
