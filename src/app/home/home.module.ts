import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SignupModule,
    SigninModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
