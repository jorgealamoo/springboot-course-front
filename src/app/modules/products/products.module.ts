import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatDialogModule,  
    MaterialModule,
    FormsModule
  ]
})
export class ProductsModule { }
