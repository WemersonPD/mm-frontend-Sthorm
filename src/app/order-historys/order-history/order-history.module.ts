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
    CardModule
  ]
})
export class OrderHistoryModule {}
