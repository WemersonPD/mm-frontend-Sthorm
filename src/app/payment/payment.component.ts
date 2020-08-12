import { TokenPayload } from './../core/user/token-payload';
import { UserService } from './../core/user/user.service';
import { PaymentService } from './payment.service';
import { ReturnPaymentCreditCard } from './return-create-payment-credit-card';
import { CreditCard } from './payment-forms/payment-credit-card/credit-card';
import { Andress } from './payment-andress/andress';
import { Router } from '@angular/router';
import { Product } from './../products/product/products-type/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreatePaymentCreditCard } from './create-payment-credit-card';

@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements OnInit{
  public product: Product;
  public paymentForm: FormGroup;
  public active = 1;
  public andress: Andress;
  public creditCard: CreditCard;
  public returnPaymentCreditCard: ReturnPaymentCreditCard;
  public user: TokenPayload;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private userService: UserService,
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
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

  addAndress(andress: Andress): void {
    this.andress = andress;
    console.log(this.andress);
  }
  addCreditCard(creditCard: CreditCard): void {
    this.creditCard = creditCard;
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
      },
      merchantOrderId: this.generateMerchantOrderId(),
      payment: {
        amount: this.product.price,
        capture: false,
        installments: 1,
        softDescriptor: 'Banzeh',
        type: 'CreditCard',
        creditCard: {
          brand: 'VISA',
          cardNumber: this.creditCard.cardNumber,
          holder: this.creditCard.holder,
          expirationDate: `${this.creditCard.monthExpiration}/${this.creditCard.yearExpiration}`,
          securityCode: this.creditCard.securityCode
        },
      }
    };
    this.paymentService.creditCard(payment).subscribe(
      returnPayment => {
        this.returnPaymentCreditCard = returnPayment;
        console.log(this.returnPaymentCreditCard);
      },
      err => console.log(err)
    );
  }
}

