import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
