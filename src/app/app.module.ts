import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SignupModule } from './signup/signup.module';
import { VmenssageModule } from './shareds/directives/vmenssage/vmenssage.module';
import { AuthModule } from './core/auth/auth.module';
import { ProductsModule } from './product/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    VmenssageModule,
    AuthModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
