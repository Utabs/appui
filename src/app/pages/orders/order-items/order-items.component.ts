import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {OrderItemModel} from "../../../models/OrderItem.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../../../models/Order.model";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, Subscription} from "rxjs";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit, OnDestroy {

  // @Output() onAddedOrderItems=new EventEmitter;

  orderItemForm = new FormGroup({
    code: new FormControl(),
    name: new FormControl(),
    codekala:new FormControl(),
    qty: new FormControl(),
    extraQty: new FormControl(),
    price: new FormControl(),
    desc: new FormControl()
  });
  orderItems: Array<OrderItemModel> = [];
  order!: OrderModel;
  subscription!: Subscription;

  constructor(private router: Router,
              private orderService: OrderService,
              private productService: ProductService) {
  }

  products:any[]=[];
  ngOnInit(): void {
    this.subscription = this.orderService.getOrderRecord().subscribe((order) => {
      this.order = order;
    });
      this.productService.getProducts(30, 10).subscribe(
      data => {
        this.products = data
      });
  }

  selectOption(event: any) {
    console.log(event)
  }

  addOrderItem() {
    let orderItem = {} as OrderItemModel;
    orderItem.name = this.orderItemForm.get('name')?.value;
    orderItem.code = this.orderItemForm.get('code')?.value;
    orderItem.codeKala = this.orderItemForm.get('codekala')?.value;
    orderItem.qty = this.orderItemForm.get('qty')?.value;
    orderItem.additionQty = this.orderItemForm.get('extraQty')?.value;
    orderItem.price = this.orderItemForm.get('price')?.value;
    orderItem.desc = this.orderItemForm.get('desc')?.value;
    this.orderItems.push(orderItem)
    this.order.itemOrderList = this.orderItems;
    this.orderService.setOrderRecord(this.order);

    this.orderItemForm.reset();
  }

  onFormSubmit() {
    this.router.navigate(["/payment"])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 1 ? [] : this.products.filter(v =>
          v.code.toLowerCase().indexOf(term.toLowerCase()) > -1
         ).slice(0, 10)));
  formatter = (result: {code:string}) =>result.code;
  resultFormatter= (result: {code:number, name:string}) =>(result.code)+"_"+result.name;

  selectItm(){
    alert("aaaa")
  }
}
