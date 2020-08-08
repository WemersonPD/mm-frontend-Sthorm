import { Product } from './../products/product/products-type/product';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements OnInit{
  public product: Product;
  public paymentForm: FormGroup;
  public active = 1;
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

    if (history.state) {
      this.product = history.state.product[0];
    }
  }


}

