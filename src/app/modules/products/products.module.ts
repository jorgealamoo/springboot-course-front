import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
