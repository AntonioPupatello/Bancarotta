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
import { PageAccountDetailComponent } from './page-account-detail/page-account-detail.component';
import { PageAccountNewComponent } from './page-account-new/page-account-new.component';
import { PageAccountComponent } from './page-account/page-account.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegulationsComponent,
    SigninComponent,
    UserDetailComponent,
    UsersComponent,
    ExchangeComponent,
    PageAccountDetailComponent,
    PageAccountNewComponent,
    PageAccountComponent,
    NewComponent,
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
