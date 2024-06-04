import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BanktransferService } from '../../services/banktransfer.service';

@Component({
  selector: 'app-banktransfer',
  standalone: true,
  imports: [RouterModule,FormsModule,LayoutComponent,MatInputModule,MatButtonModule],
  templateUrl: './banktransfer.component.html',
  styleUrl: './banktransfer.component.scss'
})
export class BanktransferComponent {
onSubmit(form: NgForm) {

}
constructor(private bankTransfer:BanktransferService){}

}
