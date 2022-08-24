import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


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

  onClickSubmit(data: { emailid: string; }) {
    alert("Entered Email id : " + data.emailid);
  }
}
