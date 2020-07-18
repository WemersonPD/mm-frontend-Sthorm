import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products-type/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiProducts = 'http://localhost:3000/products';
  constructor(
    private http: HttpClient,
  ) { }

  public getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.apiProducts}/getProducts`);
  }
}
