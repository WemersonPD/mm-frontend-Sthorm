import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './../../shareds/components/card/card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderHistoryComponent } from './order-history.component';

@NgModule({
  declarations: [
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule
  ],
  exports: [
    OrderHistoryComponent
  ]
})
export class OrderHistoryModule {}
