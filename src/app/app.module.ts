import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderItemsComponent } from './pages/orders/order-items/order-items.component';
import { ListOrdersComponent } from './pages/orders/list-orders/list-orders.component';
import {AppRoutingModule} from "./app-routing.module";
import { PaymentComponent } from './pages/payment/payment.component';
import {ProductService} from "./service/product.service";
import {AppConfig} from "./app-config";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    OrdersComponent,
    OrderItemsComponent,
    ListOrdersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ProductService,AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
