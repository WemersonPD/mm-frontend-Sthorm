import { Product } from './products-type/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() title: string;
  @Input() urlImage: string;
  public products: Product[];
  constructor(
  ) { }

  ngOnInit(): void {}

}
