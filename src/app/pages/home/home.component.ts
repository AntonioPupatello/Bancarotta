import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { ButtonsComponent } from '../../components/buttons/buttons.component';

=======
import { LoginComponent } from '../login/login.component';
import { ButtonComponent } from '../../components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
>>>>>>> origin/antonio

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterModule,ButtonsComponent],
=======
  imports: [RouterModule, MatButtonModule, MatToolbarModule],
>>>>>>> origin/antonio
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
