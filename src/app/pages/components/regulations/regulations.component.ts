import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Grid3Component } from '../../../components/grid-3/grid-3.component';

@Component({
  selector: 'app-regulations',
  standalone: true,
  imports: [RouterModule, LayoutComponent, MatButtonModule, Grid3Component],
  templateUrl: './regulations.component.html',
  styleUrl: './regulations.component.scss'
})
export class RegulationsComponent {

}
