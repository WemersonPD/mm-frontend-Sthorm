import { OrderHistory } from './order-history';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService{
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  findOrderHistorysByOwnerEmail(ownerEmail: string): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>(`${this.apiUrl}/payment/${ownerEmail}`);
  }
}
