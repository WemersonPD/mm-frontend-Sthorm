import { AuthModule } from './core/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupModule } from './signup/signup.module';
import { ProductsModule } from './products/products.module';
import { CardModule } from './shareds/components/card/card.module';
import { HeaderModule } from './core/header/header.module';
import { SigninModule } from './signin/signin.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    HeaderModule,
    ProductsModule,
    CardModule,
    NgbModule,
    SigninModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
