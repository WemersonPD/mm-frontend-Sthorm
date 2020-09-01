import { CommonModule } from '@angular/common';
import { VmenssageModule } from './../../shareds/components/vmenssage/vmenssage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PaymentCreditCardComponent } from './payment-credit-card/payment-credit-card.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [PaymentCreditCardComponent],
  exports: [PaymentCreditCardComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    VmenssageModule
  ]
})
export class PaymentFormsModule {}
