import {Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  id;
  channel;
  invoice_number;
  customer_name;
  description;
  status;
  constructor(private orderService:OrderService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrder(this.id).subscribe(order => {
      this.channel = order.channel;
      this.invoice_number = order.invoice_number;
      this.customer_name = order.customer_name;
      this.description = order.description;
      this.status = order.status;
    });
  }

onEditSubmit(){
  let order = {
    channel: this.channel,
    invoice_number: this.invoice_number,
    customer_name: this.customer_name,
    description: this.description,
    status: this.status
  }

  this.orderService.updateOrder(this.id, order).subscribe(order => {
    this.router.navigate(['/']);
  });
}
}
