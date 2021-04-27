import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsShellRoutingModule } from './products-shell-routing.module';
import { ProductsDataAccessModule } from '@nx-monorepo-demo/first-client/segments/products/data-access';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsShellRoutingModule,
    ProductsDataAccessModule,
  ]
})
export class ProductsShellModule { }
