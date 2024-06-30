import { Observable } from 'rxjs';
import { EssentialService } from '../core/essentialService';
import { Account } from '../models/account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService extends EssentialService {
  constructor() {
    super();
    this.apiPath = 'account';
  }

  getAccounts(): Observable<Account[]> {
    return this.apiCall<Account[]>({
      type: 'GET',
      url: this.altApiUrl,
    });
  }
  
  getAccount(id: number): Observable<Account> {
    return this.apiCall<Account>({
      type: 'GET',
      url: `${this.altApiUrl}/${id}`,
    });
  }

  addAccount(account: Account): Observable<Account> {
    return this.apiCall<Account>({
      type: 'POST',
      url: this.altApiUrl,
      options: {
        body: account,
      },
    });
  }

  updateAccount(account: Partial<Account>): Observable<Account> {
    return this.apiCall<Account>({
      type: 'PUT',
      url: `${this.altApiUrl}/${account.id}`,
      options: {
        body: account,
      },
    });
  }

  deleteAccount(account: Account): Observable<Account> {
    return this.apiCall<Account>({
      type: 'DELETE',
      url: `${this.altApiUrl}/${account.id}`,
    });
  }
}
