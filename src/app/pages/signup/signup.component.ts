import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { StepperEditableExample } from '../../components/stepper/stepper.component';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, LayoutComponent,StepperEditableExample ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
