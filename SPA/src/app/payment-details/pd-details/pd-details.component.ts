import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from './../../shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pd-details',
  templateUrl: './pd-details.component.html',
  styles: []
})
export class PdDetailsComponent implements OnInit {

  constructor(private service: PaymentDetailsService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // clear the form
    this.resetForm();
  }

  // reset Function
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    // clear the service formData
    this.service.formData = {
      Id: 0,
      CardOwner: '',
      CardNumber: '',
      CardExpirationDate: '',
      CardCvv: ''
    };
  }

  // Submit Fucntion
  onSubmit(form: NgForm) {
    this.service.CreatePaymentDetails(form.value).subscribe(
      res => {
       this.resetForm(form);
       this.toastr.success('Successfully Saved!', 'Payment Method');
      },
      err => {
        console.log(err);
      }
    );
  }
}
