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
  }

  list: any[] = []
  ;

  ngOnInit(): void {
     this.productService.getProducts(30, 10).subscribe(
      data => {
        this.list = data
      },error => alert("error"));
  }

  priceCash!: number ;
  priceCredit!: number ;
  priceCard!: number ;

  onKey(elem: any) {
     elem.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

  registerOrder(){
    this.productService.getProducts(30, 10).subscribe(
      data => {
        this.list = data
      },error => alert("error"));
    alert("dddddd")
   this.orderService.getOrderRecord().subscribe(data=> console.log(data)).unsubscribe();

  }

}
