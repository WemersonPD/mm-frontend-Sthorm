import { Product } from './../product/products-type/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByName' })
export class FilterByName implements PipeTransform {
  transform(products: Product[], nameQuery: string): Product[] {
    nameQuery = nameQuery
      .trim()
      .toLowerCase();
    if (nameQuery) {
      return products
        .filter(product => product.name.includes(nameQuery));
    } else {
      return products;
    }
  }
}
