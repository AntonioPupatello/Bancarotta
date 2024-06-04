import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-grid-3',
  styleUrl: './grid-3.component.scss',
  templateUrl: './grid-3.component.html',
  standalone: true,
  imports: [MatGridListModule],
})
export class Grid3Component {}
