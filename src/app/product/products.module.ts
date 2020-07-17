import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
