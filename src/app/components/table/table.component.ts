import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() data: any[] | null = [];
  @Input() columns: string[] = [];
  // il valore per il quale dovrò moltiplicare il valore delle colonne di tipo currency
  @Input() currencyVal!: number;
  @Input() currencyCols: string[] = [];

}
