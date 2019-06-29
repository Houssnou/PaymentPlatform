import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { PaymentDetails } from 'src/app/shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pd-lists',
  templateUrl: './pd-lists.component.html',
  styles: []
})
export class PdListsComponent implements OnInit {

  constructor(private service: PaymentDetailsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.GetPaymentDetails();
  }

  EditPaymentDetails(pd: PaymentDetails) {
    this.service.formData = Object.assign({}, pd);
  }
  onDelete(Id) {
    if (confirm('Do want you want to delete this payment details?')) {
      this.service.DeletePaymentDetails(Id).subscribe(
        res => {
          this.service.GetPaymentDetails();
          this.toastr.warning('Payment Deleted Successfully!', 'Payment Details');
        },
        err => {
            console.log(err);
        }
      );
    }
  }
}
