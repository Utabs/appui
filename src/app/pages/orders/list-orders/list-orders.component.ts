import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  subscriptionOrderItem!: Subscription;

  order: OrderModel = {} as OrderModel;

  constructor(private router: Router, private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrderRecord().subscribe(order => this.order = order)
    // this.listOrderItems=this.order.itemOrderList;
  }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  totalPrice(listOrderItems: OrderItemModel[]) {
    let myObj = new x();
    if (listOrderItems?.length > 0) {
      for (let item of listOrderItems) {
        myObj.totalPrice += item.price
        myObj.totalQty += item.qty
        myObj.totalExtraQty += item.additionQty
      }
    }
    return myObj;
  }


}

import {OrderService} from "../../../service/order.service";
import {OrderModel} from "../../../models/Order.model";
import {Subscription} from "rxjs";
import {OrderItemModel} from "../../../models/OrderItem.model";

import {Router} from "@angular/router";

class x {
  private _totalPrice: number = 0;
  private _totalQty: number = 0;
  private _totalExtraQty: number = 0;

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(value: number) {
    this._totalPrice = value;
  }

  get totalQty(): number {
    return this._totalQty;
  }

  set totalQty(value: number) {
    this._totalQty = value;
  }

  get totalExtraQty(): number {
    return this._totalExtraQty;
  }

  set totalExtraQty(value: number) {
    this._totalExtraQty = value;
  }
}
