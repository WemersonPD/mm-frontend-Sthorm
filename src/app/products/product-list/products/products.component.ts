import { Product } from './../../product/products-type/product';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Input() title: string;
  public rows: any[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products) { this.rows = this.groupColums(this.products); }
  }

  groupColums(products: Product[]): any[] {
    const newRows = [];
    for (let index = 0; index < products.length; index += 3) {
      newRows.push(products.slice(index, index + 3));
    }
    return newRows;
  }

}
