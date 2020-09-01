import { ReturnPaymentCreditCard } from './return-create-payment-credit-card';
import { CreatePaymentCreditCard } from './create-payment-credit-card';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}
  creditCard(createPaymentCreditCard: CreatePaymentCreditCard): Observable<ReturnPaymentCreditCard> {
    const headers = new HttpHeaders()
      .append('merchantId', environment.merchantId)
      .append('Content-Type', 'application/json');
    return this.http
      .post<ReturnPaymentCreditCard>(
        `${environment.apiUrl}/payment/creditCard`,
        createPaymentCreditCard,
        { headers }
      );
  }
}
