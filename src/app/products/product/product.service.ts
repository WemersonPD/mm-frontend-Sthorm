import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Products } from './products-type/products';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiProducts = environment.apiUrl + '/products';
  constructor(
    private http: HttpClient,
  ) { }

  public getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.apiProducts}/getProducts`);
  }
}
