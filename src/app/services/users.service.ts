import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, UserResponse } from '../models/user';
import { EssentialService } from '../core/essentialService';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends EssentialService {
  constructor() {
    super();
    this.apiPath = 'users';
  }

  getUsers(): Observable<User[]> {
    return this.apiCall<UserResponse>({
      type: 'GET',
      url: this.apiUrl,
    }).pipe(
      map((res: UserResponse) => {
        return res.users;
      })
    );
  }

  getUser(id: number | string): Observable<User> {
    return this.apiCall<User>({
      type: 'GET',
      url: `${this.apiUrl}/${id}`,
    });
  }
}
