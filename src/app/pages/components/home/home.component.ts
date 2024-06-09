import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { TabComponent } from '../../../components/tabs/tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule, LayoutComponent, TabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private date:number = new Date().getFullYear()
  get currentYear():number{
    return this.date
  }
}
