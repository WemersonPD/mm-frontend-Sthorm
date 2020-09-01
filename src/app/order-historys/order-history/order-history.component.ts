import { Product } from 'src/app/products/product/products-type/product';
import { ProductService } from './../../products/product/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent {
  @Input() urlImg: string;
  @Input() productName: string;
  @Input() amount: string;
  @Input() status: string;
}
