import { ReturnPaymentCreditCard } from './return-create-payment-credit-card';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as creditCardType from 'credit-card-type';

import { TokenPayload } from './../core/user/token-payload';
import { UserService } from './../core/user/user.service';
import { PaymentService } from './payment.service';
import { CreditCard } from './payment-forms/payment-credit-card/credit-card';
import { Andress } from './payment-andress/andress';
import { Product } from './../products/product/products-type/product';
import { CreatePaymentCreditCard } from './create-payment-credit-card';

@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit{
  public product: Product;
  public active = 1;
  public andress: Andress;
  public creditCard: CreditCard;
  public returnPaymentCreditCard: ReturnPaymentCreditCard;
  public user: TokenPayload;
  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    try {
      this.product = history.state.product[0];
    } catch {
      console.log('Produto(s) não selecionado(s)');
      this.router.navigate(['']);
    }
    this.userService.getUser()
    .subscribe((user) => (this.user = user));
  }
  validationForms(): boolean {
    if (this.andress !== undefined && this.creditCard !== undefined) {
      return false;
    }
    return true;
  }
  addAndress(andress: Andress): void {
    this.andress = andress;
  }
  addCreditCard(creditCard: CreditCard): void {
    this.creditCard = creditCard;
  }
  getCreditCardBrand(cardNumber: string): string {
    return creditCardType(cardNumber)[0].type.toUpperCase();
  }
  generateMerchantOrderId(): string {
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    return `${year}-${day}-${hours}-${minutes}-${seconds}`;
  }
  createNewPaymantCreditCard(): void {
    const payment: CreatePaymentCreditCard = {
      product: this.product,
      ownerEmail: this.user.email,
      customer: {
        name: this.user.name,
        email: this.user.email,
        identity: this.creditCard.cpf,
        identityType: 'CPF',
        deliveryAddress: {
          city: this.andress.city,
          state: this.andress.state,
          complement: this.andress.complement,
          country: 'Brasil',
          number: this.andress.number,
          street: this.andress.street,
          zipCode: this.andress.zipCode,
        },
        Address: {
          city: this.andress.city,
          state: this.andress.state,
          complement: this.andress.complement,
          country: 'Brasil',
          number: this.andress.number,
          street: this.andress.street,
          zipCode: this.andress.zipCode,
        },
      },
      merchantOrderId: this.generateMerchantOrderId(),
      payment: {
        amount: this.product.price,
        capture: false,
        installments: 1,
        softDescriptor: 'Banzeh',
        type: 'CreditCard',
        creditCard: {
          brand: this.getCreditCardBrand(this.creditCard.cardNumber),
          cardNumber: this.creditCard.cardNumber,
          holder: this.creditCard.holder,
          expirationDate: `${this.creditCard.monthExpiration}/${this.creditCard.yearExpiration}`,
          securityCode: this.creditCard.securityCode,
        },
      },
    };
    this.paymentService.creditCard(payment).subscribe(
      (returnPayment) => {
        this.returnPaymentCreditCard = returnPayment;
        console.log(this.returnPaymentCreditCard);
      },
      (err) => console.log(err)
    );
  }
}
