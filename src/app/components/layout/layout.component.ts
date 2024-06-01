import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CommonModule, NgIf } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { SigninComponent } from '../../pages/signin/signin.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,ButtonsComponent,CommonModule,NgIf,LoginComponent,SigninComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  title: string = "titolo del componente layout"
  private date:number = new Date().getFullYear()
  get currentYear():number{
    return this.date
  }

}
