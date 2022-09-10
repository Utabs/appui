import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./pages/orders/orders.component";
import {OrderItemsComponent} from "./pages/orders/order-items/order-items.component";
import {ListOrdersComponent} from "./pages/orders/list-orders/list-orders.component";
import {PaymentComponent} from "./pages/payment/payment.component";

export const routes: Routes = [
   { path: '', component:OrdersComponent },
   { path: 'orderItem', component:OrderItemsComponent },
   { path: 'payment', component:PaymentComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes )],
  exports: [ RouterModule ],
  declarations:[]
})
export class AppRoutingModule {}
