import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
LoginUrl = ''
  constructor(private http:HttpClient) { }
  Login(email: string, password: string){
    return this.http.post(this.LoginUrl,{email: email, password: password, returnSecureToken: true})
  }
}
