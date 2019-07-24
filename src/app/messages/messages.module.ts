import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import * as Material from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DataSource} from '@angular/cdk/typings/collections';

@NgModule({
  declarations: [MessagesListComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    FormsModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    FormsModule
  ]
})
export class MessagesModule { }
