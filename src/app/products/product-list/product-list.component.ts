import { Component, OnInit } from '@angular/core';


import { Product } from '../product/products-type/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public filter = '';
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.products;
    });
  }
}
