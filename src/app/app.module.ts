import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupModule } from './signup/signup.module';
import { VmenssageModule } from './shareds/components/vmenssage/vmenssage.module';
import { ProductsModule } from './products/products.module';
import { CardModule } from './shareds/components/card/card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    VmenssageModule,
    ProductsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
