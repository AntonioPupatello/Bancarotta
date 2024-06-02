import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, MatToolbar, MatToolbarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  title: string = "titolo del componente layout"
  private date:number = new Date().getFullYear()
  get currentYear():number{
    return this.date
  }

}
