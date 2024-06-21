import { Component, inject } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrl: './currency-convert.component.scss'
})
export class CurrencyConvertComponent {
  converter = inject(ConverterService)
  
  // valori di default per inizializzare il componente
  fromCurrency: string = 'EUR'
  toCurrency: string = 'USD'
  value: number = 1
  rate: number  = 1
  // observable per la gesione dei tassi di cambio
  rates$ = this.converter.getCurrencyRates(this.toCurrency).pipe(
    tap((_) => {
      // aggiorna il tasso di cambio e il valore di output
      this.rate = this.converter.getCurrentRate(this.fromCurrency)
      this.outputValue = this.calcValue(this.value, this.rate)
    })
  )
  // opzione per le select
  optionCodes = this.converter.getCurrencyOptions()
  outputValue!: number
 
  updateFromCurrency(value:string): void {
    // aggiorno la lista degli altri valori dei tassi di cambio
    this.rates$ = this.converter.getCurrencyRates(value)
    this.updateOutput()
  }

  updateToCurrency(value:string): void {
    // aggiorno il tasso di cambio 
    this.rate = this.converter.getCurrentRate(value)
    this.updateOutput()
  }

  
  updateValue(event:Event): void {
    //aggiorno il valore del tasso di cambio
    const inputElement = event.target as HTMLInputElement;
    this.value = parseFloat(inputElement.value)
    this.updateOutput()
  }

  updateOutput():void{
    // aggiorno il valore visualizzato
    this.outputValue = this.calcValue(this.value, this.rate)
  }

  calcValue(from:number, to:number){
    return from * to
  }

  validateInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    // Verifica che il valore sia un numero valido
    if (!/^\d*\.?\d*$/.test(value)) {
      inputElement.value = value.slice(0, -1); // Rimuove l'ultimo carattere
    }
  }
  
}
