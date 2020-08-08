import { NgModule } from '@angular/core';
import { PaymentCreditCardModule } from './payment-credit-card/payment-credit-card.module';

@NgModule({
  imports: [
    PaymentCreditCardModule
  ],
  exports: [PaymentCreditCardModule]
})
export class PaymentFormsModule {}
