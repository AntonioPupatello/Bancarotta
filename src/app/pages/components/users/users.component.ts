import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../data/services/users.service';
import { User } from '../../models/user';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule,LayoutComponent,CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  usersService = inject(UsersService)
  users: Observable<User[]> = this.usersService.getUsers()
}
