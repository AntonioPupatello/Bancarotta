import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { API_URL } from './config/tokens';





@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AuthService,{
    provide: API_URL,
    useValue:'https://dummyjson.com'
  }]
})


export class AppComponent {
  title = 'bank-project';
  constructor(private authService: AuthService){}
}
