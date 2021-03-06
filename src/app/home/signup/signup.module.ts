import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { VmenssageModule } from '../../shareds/components/vmenssage/vmenssage.module';



@NgModule({
  declarations: [
    SignupComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmenssageModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SignupModule { }
