import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {MultipleComponent} from './multiple/multiple.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerListComponent
  },
  {
    path: 'order',
    component: OrderListComponent
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'update/:id', component: UpdateProductComponent
  },
  {
    path: 'new/:id', component: UpdateOrderComponent
  },
  {
    path: 'multiple', component: MultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
