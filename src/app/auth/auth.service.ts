import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
LoginUrl = ''
SignUpUrl = ''
  user: User| undefined;
  constructor(private http:HttpClient) { }

  createUser(email: string, id: string, token: string){
   this.user = new User(email, id, token)
  }

  Login(email: string, password: string){
    return this.http.post(this.LoginUrl,{email: email, password: password, returnSecureToken: true})
  }
  SignUp(nome: string, cognome: string, datadinascita: Date, email: string, password: string){
    return this.http.post(this.SignUpUrl, {email: email, password: password, returnSecureToken: true})
  }

  Logout(){
    
    localStorage.removeItem('user')
  }
}
