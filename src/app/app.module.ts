import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

import {OrderService} from './services/order.service';

const appRoutes: Routes = [
  {path:'', component:OrdersComponent},
  {path: 'order/add', component: AddOrderComponent},
  {path: 'order/:id', component: OrderDetailsComponent},
  {path: 'order/edit/:id', component: EditOrderComponent},
  {path: 'invoice/add/:order_id', component: AddInvoiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent,
    OrderDetailsComponent,
    AddInvoiceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
