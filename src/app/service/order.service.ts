import {EventEmitter, Injectable} from '@angular/core';
import {OrderModel} from "../models/Order.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {OrderItemModel} from "../models/OrderItem.model";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() {
  }

  public editDataDetails: any = [];
  public orderItemData:OrderItemModel={} as OrderItemModel;
  private messageOrderSource = new BehaviorSubject(this.editDataDetails);
  private messageOrderItemSource = new BehaviorSubject(this.orderItemData);
  currentMessage = this.messageOrderSource.asObservable();
  currentOrderItems = this.messageOrderItemSource.asObservable();


  changeMessage(message: OrderModel) {
    this.messageOrderSource.next(message)
  }

  changeOrderItem(message: OrderItemModel) {
    this.messageOrderItemSource.next(message)
   }


  //Using Interfaces
  public productData:Product={} as Product;

  private productRecord: BehaviorSubject<Product> = new BehaviorSubject<Product>(this.productData);

  public getProductRecord(): Observable<Product> {
    return this.productRecord.asObservable();
  }

  public setProductRecord(product: Product): void {
    this.productRecord.next(this.productData);
  }


  //Using Interfaces Orders
  public orderData:OrderModel={} as OrderModel;

  //messageSource
  private orderRecord: BehaviorSubject<OrderModel> = new BehaviorSubject<OrderModel>(this.orderData);

  public getOrderRecord(): Observable<OrderModel> {
    //current message
    return this.orderRecord.asObservable();
  }

  public setOrderRecord(order: OrderModel): void {
    this.orderRecord.next(order);
   }
}
