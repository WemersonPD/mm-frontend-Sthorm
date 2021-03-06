import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CreditCard } from './credit-card';

@Component({
  selector: 'app-payment-credit-card',
  templateUrl: './payment-credit-card.component.html',
})
export class PaymentCreditCardComponent implements OnInit {
  public creditCardForm: FormGroup;
  @Output() sendCreditCardForm = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.creditCardForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      holder: ['', Validators.required],
      monthExpiration: ['', Validators.required],
      yearExpiration: ['', Validators.required],
      securityCode: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });

  }
  getYears(): number[]{
    let currentYear = new Date().getFullYear();
    const years = [];
    for (currentYear; currentYear < new Date().getFullYear() + 30; currentYear++){
      years.push(currentYear);
    }
    return years;
  }

  getMonths(): number[] {
    let currentMonthNumber = 1;
    const months = [];
    for (currentMonthNumber; currentMonthNumber <= 12; currentMonthNumber++){
      const currentMonthConvetingToString = currentMonthNumber.toString();
      if (currentMonthNumber <= 9) {
        months.push(`0${currentMonthConvetingToString.toString()}`);
      } else {
        months.push(currentMonthConvetingToString.toString());
      }
    }
    return months;
  }

  sendNewCreditCard(creditCardForm: FormGroup): void {
    const creditCard = creditCardForm.getRawValue() as CreditCard;
    this.sendCreditCardForm.emit(creditCard);
  }
}
