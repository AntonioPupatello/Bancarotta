import { Component, inject } from '@angular/core';
import { accountFormConfig } from '../../../models/accounts.config';
import { takeUntil } from 'rxjs';
import { Account } from '../../../models/account';
import { AccountsService } from '../../../services/accounts.service';
import { EssentialComponent } from '../../../core/essentialComponent';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrl: './account-new.component.scss'
})
export class AccountNewComponent extends EssentialComponent{
  formConfig = accountFormConfig
  accountsService = inject(AccountsService)

  createAccount(account: Account){
    this.accountsService.addAccount(account).pipe(
      takeUntil(this.destroy$)
    ).subscribe((_account) => {
      this.router.navigate(['/'])
    })
  }
}
