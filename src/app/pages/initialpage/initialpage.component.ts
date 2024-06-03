import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-initialpage',
  standalone: true,
  imports: [RouterModule,LayoutComponent,MatSidenavModule,FormsModule],
  templateUrl: './initialpage.component.html',
  styleUrl: './initialpage.component.scss'
})
export class InitialpageComponent {
  options = this._formBuilder.group({
    bottom: 64,
    fixed: true,
    top: 61,
  });

  constructor(private _formBuilder: FormBuilder) {}

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
