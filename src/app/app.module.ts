import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupModule } from './signup/signup.module';
import { VmenssageModule } from './shareds/directives/vmenssage/vmenssage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    VmenssageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
