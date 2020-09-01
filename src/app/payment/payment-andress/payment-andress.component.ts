import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Andress } from './andress';

@Component({
  selector: 'app-payment-andress',
  templateUrl: './payment-andress.component.html',
  styleUrls: ['./payment-andress.component.scss']
})
export class PaymentAndressComponent implements OnInit {
  public andressForm: FormGroup;
  @Output() sendAndresForm = new EventEmitter<Andress>();
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.andressForm = this.formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }
  sendNewAndress(andressForm: FormGroup): void {
    const andress = andressForm.getRawValue() as Andress;
    this.sendAndresForm.emit(andress);
  }
}
