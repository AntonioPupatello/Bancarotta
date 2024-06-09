import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
LoginUrl = ''
SignUpUrl = ''
 
  constructor(private http:HttpClient) { }



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
