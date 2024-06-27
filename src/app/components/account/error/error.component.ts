import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class AccountErrorComponent {
  @Input() control!: AbstractControl<any, any> | null
  @Input() errorMessage!: string | undefined
}
