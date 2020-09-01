import { Product } from './../product/products-type/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType',
})
export class FilterByType implements PipeTransform {
  transform(products: Product[], type: string): Product[] {
    type
      .trim()
      .toLowerCase();
    if (type) {
      return products.filter(product => product.type
        .trim()
        .toLowerCase()
        .includes(type));
    } else {
      return products;
    }
  }

}
