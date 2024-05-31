import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatButtonModule,RouterModule,CommonModule,NgIf],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  isLoginVisible: boolean = false;
  isSigninVisible: boolean = false;

  showLogin() {
    this.isLoginVisible = true;
    this.isSigninVisible = false;
  }

  showSignin() {
    this.isLoginVisible = false;
    this.isSigninVisible = true;
  }
}
