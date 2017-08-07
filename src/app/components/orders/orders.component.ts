import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;
  constructor(private orderService:OrderService, private router: Router) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

onDeleteClick(id){
  this.orderService.deleteOrder(id).subscribe(order => {
    this.router.navigate(['/']);
  });
}
}
