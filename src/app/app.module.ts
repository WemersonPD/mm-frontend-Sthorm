import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { ProductsModule } from './products/products.module';
import { CardModule } from './shareds/components/card/card.module';
import { HeaderModule } from './core/header/header.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './core/auth/auth.module';
import { FooterModule } from './core/footer/footer.module';
import { PaymentModule } from './payment/payment.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ProductsModule,
    CardModule,
    NgbModule,
    AuthModule,
    FooterModule,
    AdminModule,
    PaymentModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
