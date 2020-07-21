import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { VmenssageModule } from './../shareds/components/vmenssage/vmenssage.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmenssageModule,
    RouterModule
  ]
})
export class SigninModule { }
