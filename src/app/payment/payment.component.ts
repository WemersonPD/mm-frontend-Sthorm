import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  templateUrl: './payment.component.html',
})
export class PaymentComponent  implements OnInit{
  @Input() product: number;
  public paymentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ){}
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      customerName: [''],
      customerIdentity: [''],
      customerEmail: [''],
      customerDeliveryAddressStreet: [''],
      customerDeliveryAddressNumber: [''],
      customerDeliveryAddressComplement: [''],
      customerDeliveryAddressZipCode: [''],
      customerDeliveryAddressCity: [''],
      customerDeliveryAddressState: [''],
      customerDeliveryAddress: [''],
      test: {
        d: ['Dentro'],
      }

    });
  }

}
