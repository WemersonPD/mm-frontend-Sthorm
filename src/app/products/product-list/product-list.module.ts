import { CardModule } from './../../shareds/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list.component';
import { FilterByName } from './filterByName.pipe';
import { VmenssageModule } from './../../shareds/components/vmenssage/vmenssage.module';
import { ProductModule } from './../product/product.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [ProductListComponent, ProductsComponent, FilterByName, SearchComponent],
  imports: [
    CommonModule,
    ProductModule,
    VmenssageModule,
    CardModule
  ]
})
export class ProductListModule { }
