import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import {FormsModule} from "@angular/forms";
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { OrderItemsComponent } from './pages/orders/order-items/order-items.component';
import { ListOrdersComponent } from './pages/orders/list-orders/list-orders.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    OrdersComponent,
    OrderItemsComponent,
    ListOrdersComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
