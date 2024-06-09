import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule,  LayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private authService: AuthService){}

onSubmit(form: NgForm) {
const email = form.value.email
const password = form.value.password
this.authService.Login(email,password).subscribe(data =>{
  console.log(data)
  
})
}

}
