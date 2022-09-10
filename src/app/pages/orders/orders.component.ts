import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../../service/order.service";
import {OrderModel} from "../../models/Order.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  // @Output() onAddedOrderItems=new EventEmitter;
  orderModel: OrderModel ={} as OrderModel;
  subscription!: Subscription;


  constructor(private router:Router,private orderService: OrderService) {
  }


  ngOnInit(): void {

  }


  onSubmitForm() {
     this.orderService.setOrderRecord(this.orderModel);
     this.router.navigate(["/orderItem" ])
  }


  ngOnDestroy(): void {
  }
}
