import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {AppModule} from '../app.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class CustomerModule { }
