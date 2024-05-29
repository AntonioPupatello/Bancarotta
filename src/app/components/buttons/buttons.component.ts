import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
