import { ProductService } from './product.service';
import { Products } from './products/products';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './products/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public apiProducts = 'http://localhost:3000/products';
  public products: Product[];
  public currentPhoto;
  constructor(
    private http: HttpClient,
    private productservice: ProductService
  ) { }

  ngOnInit(): void {
    this.productservice
      .getProducts()
      .subscribe(
        products => {
          this.products = products.products;
          console.log(this.products);
        }
      );
  }

  public getPhoto(urlImage: string): string {
    return `${this.apiProducts}/getImage/${urlImage}`;
  }
}
