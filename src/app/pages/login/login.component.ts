import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, LayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password}
}
