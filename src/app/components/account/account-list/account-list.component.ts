import { Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/essentialComponent';
import { AccountsService } from '../../../services/accounts.service';
import { accountTableConfig } from '../../../models/accounts.config';
import { Account } from '../../../models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent extends EssentialComponent{
  accountsService = inject(AccountsService);
  tableConfig = accountTableConfig
  accounts$ = this.accountsService.getAccounts();

  goToDetail(account:Account){
    this.router.navigate([account.id])
  }
}
