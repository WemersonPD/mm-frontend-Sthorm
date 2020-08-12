import { PaymentService } from './payment.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { PaymentFormsModule } from './payment-forms/payment-forms.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardModule } from './../shareds/components/card/card.module';
import { PaymentComponent } from './payment.component';
import { PaymentAndressComponent } from './payment-andress/payment-andress.component';
import { VmenssageModule } from './../shareds/components/vmenssage/vmenssage.module';
// import { TextMaskModule } from 'angular2-text-mask';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PaymentComponent, PaymentAndressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    VmenssageModule,
    NgbNavModule,
    PaymentFormsModule,
    RouterModule,
    HttpClientModule
  ],
})
export class PaymentModule {}
