import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./pages/orders/orders/orders.component";
import {OrderItemsComponent} from "./pages/orders/order-items/order-items.component";

export const routes: Routes = [
   { path: '', component:OrdersComponent },
   { path: 'orderItem', component:OrderItemsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes )],
  exports: [ RouterModule ],
  declarations:[]
})
export class AppRoutingModule {}
