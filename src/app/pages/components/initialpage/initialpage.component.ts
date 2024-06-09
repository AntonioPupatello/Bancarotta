import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../components/layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-initialpage',
  standalone: true,
  imports: [RouterModule,LayoutComponent,MatSidenavModule,FormsModule,MatButtonModule,MatIconModule,MatToolbarModule,MatSliderModule,MatCardModule],
  templateUrl: './initialpage.component.html',
  styleUrl: './initialpage.component.scss'
})
export class InitialpageComponent {
  options = this._formBuilder.group({
    bottom: 536,
    fixed: true,
    top: 61,
  });

  constructor(private _formBuilder: FormBuilder) {}

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  balance: number = 0;
}
