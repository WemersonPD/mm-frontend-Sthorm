import { OrderHistoryModule } from './../order-history/order-history.module';
import { CommonModule } from '@angular/common';
import { OrderHistoryListComponent } from './order-history-list.component';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shareds/components/card/card.module';
@NgModule({
  declarations: [
    OrderHistoryListComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryModule,
    CardModule
  ]
})
export class OrderHistoryListModule {}
