import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {OverAllService} from './over-all.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginRegisterModule} from './login-register/login-register.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {LoginRegisterComponent} from './login-register/login-register/login-register.component';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import { UpdateProductComponent } from './update-product/update-product.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { OrderListComponent} from './order/order-list/order-list.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { CustomerListComponent} from './customer/customer-list/customer-list.component';
import { MultipleComponent } from './multiple/multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateProductComponent,
    OrderListComponent,
    UpdateOrderComponent,
    CustomerListComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    LoginRegisterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [OverAllService],

  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [LoginComponent, LoginRegisterComponent]
})
export class AppModule {
}
