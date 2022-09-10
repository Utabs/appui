import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,
              private productService: ProductService,
              private orderService: OrderService) {
    this.orderService.getOrderRecord().subscribe(data => {
      data.itemOrderList.forEach(x=>{console.log(x.code)})
    })
  }

  list: any[] = []

  ngOnInit(): void {
    var me = this;
    me.productService.getProducts().subscribe(data => {
      this.list = data
    });

  }

  getItem(e: any) {

  }

}
