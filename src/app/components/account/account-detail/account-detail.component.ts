import { Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/essentialComponent';
import { AccountsService } from '../../../services/accounts.service';
import { accountFormConfig } from '../../../models/accounts.config';
import { catchError, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.scss'
})
export class AccountDetailComponent extends EssentialComponent{
  accountsService = inject(AccountsService);
  formConfig = accountFormConfig;

  account$ = this.accountsService.getAccount(this.routeParams['id']).pipe(
    catchError((error) => {
      this.router.navigate(['/']);
      return throwError(() => error);
    })
  );

  deleteAccount(account: any) {
    this.accountsService
      .deleteAccount(account)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  updateAccount(account: any) {
    this.accountsService
      .updateAccount({ ...account, id: this.routeParams['id'] })
      .pipe(takeUntil(this.destroy$))
      .subscribe((_account) => {
        this.router.navigate(['/']);
      });
  }
}
