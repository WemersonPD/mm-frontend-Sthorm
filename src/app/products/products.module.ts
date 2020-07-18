import { ProductListModule } from './product-list/product-list.module';
import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    ProductListModule
  ]
})
export class ProductsModule { }
