import { Validators } from "@angular/forms";
import { FormConfig } from "../components/account/form/form.component";
import { TableConfig } from "./table";


export const accountFormConfig: FormConfig[] = [
    {
      name: 'firstName',
      label: 'nome',
      type: 'text',
      validators: [Validators.required]
    }, 
    {
      name: 'lastName',
      label: 'cognome',
      type: 'text',
      validators: [Validators.required]
    }, 
    {
      name: 'username',
      label: 'username',
      type: 'text',
      validators: [Validators.required]
    }, 
    {
      name: 'password',
      label: 'password',
      type: 'text',
      validators: [Validators.required]
    }, 
    {
      name: 'city',
      label: 'La tua città',
      type: 'text',
      validators: [Validators.required]
    },
    {
      name: 'email',
      label: 'Indirizzo Email',
      type: 'text',
      validators: [Validators.required, Validators.email]
    },
    {
      name: 'phone',
      label: 'Numero di telefono',
      type: 'text',
      validators: [Validators.required, Validators.pattern(/^\+\d{2}\s\d{10}$/)], 
      errorMessage: 'deve essere un numero di telefono valido'
    },
    {
      name: 'notes',
      label: 'note',
      type: 'textarea',
      validators: [Validators.required, Validators.minLength(10),Validators.maxLength(100)]
    }
  ]

export const accountTableConfig: TableConfig[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'Nome'
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Cognome'
  },
  {
    name: 'username',
    type: 'text',
    label: 'Username'
  },
  {
    name: 'password',
    type: 'text',
    label: 'Password'
  },
  {
    name: 'city',
    type: 'text',
    label: 'Città'
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'detail',
    type: 'action',
    label: 'Go to detail'
  },

]