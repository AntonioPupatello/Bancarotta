import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanktransferService {

  constructor(private http:HttpClient) { }
  TransferUrl = ''

  Transfer(body:{}){
    return this.http.post(this.TransferUrl,body)
  }
}
