import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BanktransferService } from '../../services/banktransfer.service';
import { Recipient, Security, Sender, TransactionDetails, Transfer } from '../../models/transfer.model';

@Component({
  selector: 'app-banktransfer',
  standalone: true,
  imports: [RouterModule,FormsModule,LayoutComponent,MatInputModule,MatButtonModule],
  templateUrl: './banktransfer.component.html',
  styleUrl: './banktransfer.component.scss'
})
export class BanktransferComponent {
  transferForm: FormGroup
  
  constructor(private bankTransfer:BanktransferService, private fb: FormBuilder){
    this.transferForm = this.fb.group({
    sender: this.fb.group({
      name: ['', Validators.required],
      iban: ['', Validators.required],
      bank: ['', Validators.required]
    }),
    recipient: this.fb.group({
      name: ['', Validators.required],
      iban: ['', Validators.required],
      bank: ['', Validators.required],
      bic: ['', Validators.required]
    }),
    details: this.fb.group({
      amount: ['', Validators.required],
      currency: ['EUR', Validators.required],
      description: ['', Validators.required],
      execution_date: ['', Validators.required]
    }),
    security: this.fb.group({
      auth_token: ['', Validators.required]
     
    })
  });
  }
  
onSubmit() {
  if (this.transferForm.valid) {
    const sender: Sender = this.transferForm.value.sender;
    const recipient: Recipient = this.transferForm.value.recipient;
    const details: TransactionDetails = this.transferForm.value.details;
    const security: Security = this.transferForm.value.security;

    const transaction = new Transfer(sender, recipient, details, security);

    this.bankTransfer.Transfer(transaction).subscribe(
      response => {
        console.log('Trasferimento effettuato con successo!', response)
        error:(error: any) => {
        console.error('Errore nel trasferimento: ', error);
      }
  });
  }
}
}



