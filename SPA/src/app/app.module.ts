import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PdDetailsComponent } from './payment-details/pd-details/pd-details.component';
import { PdListsComponent } from './payment-details/pd-lists/pd-lists.component';
import { PaymentDetailsService } from './shared/payment-details.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PdDetailsComponent,
    PdListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PaymentDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
