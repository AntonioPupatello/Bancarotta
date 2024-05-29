//Questo viene generato in automatico da Angular
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-button',
//   standalone: true,
//   imports: [],
//   templateUrl: './button.component.html',
//   styleUrl: './button.component.scss'
// })

// export class ButtonComponent {}

import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonComponent {}

