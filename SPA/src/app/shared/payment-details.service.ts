import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  formData: PaymentDetails;
  readonly rootUrl = 'http://localhost:50637/api';
  list: PaymentDetails[];

  constructor(private http: HttpClient) { }

  // Post Data /API/PaymentDetails
  CreatePaymentDetails() {
    return this.http.post(this.rootUrl + '/PaymentDetails', this.formData);
  }

  // PUT Data /API/PaymentDetails/Id
  EditPaymentDetails() {
    return this.http.put(this.rootUrl + '/PaymentDetails/' + this.formData.Id, this.formData);
  }

  // DELETE Data /API/PaymentDetails/Id
  DeletePaymentDetails(id) {
    return this.http.delete(this.rootUrl + '/PaymentDetails/' + id);
  }
  // Get Data /API/PaymentDetails
  GetPaymentDetails() {
    this.http.get(this.rootUrl + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetails[]);
  }

}
