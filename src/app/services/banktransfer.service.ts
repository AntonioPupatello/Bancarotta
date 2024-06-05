import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanktransferService {

  constructor(private http:HttpClient) { }
  TransferUrl = ''

  Transfer(transaction: Transfer): Observable<any>{
    return this.http.post(this.TransferUrl,transaction)
  }
}
