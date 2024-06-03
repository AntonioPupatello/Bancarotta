import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';





@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AuthService]
})


export class AppComponent {
  title = 'bank-project';
  constructor(private authService: AuthService){}
}
