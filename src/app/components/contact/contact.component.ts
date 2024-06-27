import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nome: [''],
      cognome: [''],
      email: [''],
      messaggio: ['']
    });
  }

  onSubmit() {
    console.log('Valori del form:', this.contactForm.value);
  }
}
