interface Sender {
    name: string;
    iban: string;
    bank: string;
  }
  
  interface Recipient {
    name: string;
    iban: string;
    bank: string;
  }
  
  interface TransactionDetails {
    amount: number;
    currency: string;
    description: string;
    execution_date: string;
  }
  
  interface Security {
    auth_token: string;
  }
  
  export class Transfer {
    constructor(
      public sender: Sender,
      public recipient: Recipient,
      public details: TransactionDetails,
      public security: Security
    ) {}
  }
  