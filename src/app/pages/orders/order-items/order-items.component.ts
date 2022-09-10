import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {OrderItemModel} from "../../../models/OrderItem.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../../../models/Order.model";
import {Subscription} from "rxjs";
import {routes} from "../../../app-routing.module";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit, OnDestroy  {

  // @Output() onAddedOrderItems=new EventEmitter;

  orderItemForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    qty: new FormControl(),
    extraQty: new FormControl(),
    price: new FormControl(),
    desc: new FormControl()
  });
    // orderItem={} as OrderItemModel;
  orderItems: Array<OrderItemModel> = [];
  order!: OrderModel  ;
  subscription!: Subscription;
  constructor(private router: Router, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.subscription=this.orderService.getOrderRecord().subscribe((order) => {
      this.order=order;
    });

  }


  addOrderItem() {
    let orderItem={} as OrderItemModel;
    orderItem.name=this.orderItemForm.get('name')?.value;
    orderItem.code=this.orderItemForm.get('code')?.value;
    orderItem.qty=this.orderItemForm.get('qty')?.value;
    orderItem.additionQty= this.orderItemForm.get('extraQty')?.value;
    orderItem.price= this.orderItemForm.get('price')?.value;
    orderItem.desc= this.orderItemForm.get('desc')?.value;
    this.orderItems.push(orderItem)
     this.order.itemOrderList=this.orderItems;
    this.orderService.setOrderRecord(this.order)
    }

  onFormSubmit() {
    this.router.navigate(["/payment"])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}
