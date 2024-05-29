import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from '../../components/buttons/buttons.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,ButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
