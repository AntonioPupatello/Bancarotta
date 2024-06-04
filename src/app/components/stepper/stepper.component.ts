import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'stepper',
  templateUrl: 'stepper.component.html',
  styleUrl: 'stepper.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StepperEditableExample {
  firstFormGroup = this._formBuilder.group({
    nome: ['', Validators.required],
    cognome:['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    password:['', Validators.required],
    datadinascita:['', Validators.required]
  });
  //isEditable = false;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) {}

  onSubmit() {
    const email = this.secondFormGroup.value.email!;
    const password = this.secondFormGroup.value.password!;
    const datadinascita = new Date(this.secondFormGroup.value.datadinascita!);
    const nome = this.firstFormGroup.value.nome!;
    const cognome = this.firstFormGroup.value.cognome!;
    this.authService.SignUp(nome,cognome,datadinascita,email,password).subscribe(data =>{
      console.log(data)}
    )}
}
