import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ContactComponent } from '../contact/contact.component';
import { TabGroupBasicExample } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatToolbarModule, LayoutComponent, ContactComponent, TabGroupBasicExample],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private date:number = new Date().getFullYear()
  get currentYear():number{
    return this.date
  }
}
