import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-grid',
  styleUrl: './grid.component.scss',
  templateUrl: './grid.component.html',
  standalone: true,
  imports: [MatGridListModule],
})
export class GridListOverview {}
