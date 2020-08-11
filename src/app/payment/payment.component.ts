import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,

  ){}
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: []
    });

    try {
      this.product = history.state.product[0];
    } catch {
      console.log('Produto(s) não selecionado(s)');
      this.router.navigate(['']);
    }
  }


}

