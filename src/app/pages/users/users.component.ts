import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  usersService = inject(UsersService)
  users: Observable<User[]> = this.usersService.getUsers()
}
