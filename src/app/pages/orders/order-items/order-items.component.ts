import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order.service";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  get orderServiceData(): String {
    return <String>this.orderService.orderData;
  }

  set orderServiceData(value: String) {
    // @ts-ignore
    this.orderService.orderData = value;
  }

  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
  }

}
