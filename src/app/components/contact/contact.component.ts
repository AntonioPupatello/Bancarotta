import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GridListOverview } from '../grid/grid.component';

/** @title Simple form field */
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, GridListOverview ],
})
export class ContactComponent {}
