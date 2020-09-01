import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Products } from './products-type/products';
import { environment } from '../../../environments/environment';
import { Product } from './products-type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiProducts = environment.apiUrl + '/products';
  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.apiProducts}`);
  }
  getProductByName(productName: string): Observable<Product[]> {
    const productNameRefatoring = productName.replace(/ /g, '%20');
    return this.http.get<Product[]>(`${this.apiProducts}/${productNameRefatoring}`);
  }
}
