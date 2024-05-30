import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from '../buttons/buttons.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,ButtonsComponent],
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
