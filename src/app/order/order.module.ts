import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    ReactiveFormsModule,
    Material.MatRadioModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatDialogModule

  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatDialogModule
  ]
})
export class OrderModule { }
