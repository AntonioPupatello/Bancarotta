import { Injectable } from '@angular/core';
import { EssentialService } from '../../shared/core/essentialService';
import { User, UserResponse } from '../../pages/models/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EssentialService {

  constructor() { 
    super();
    this.apiPath = 'users'
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
