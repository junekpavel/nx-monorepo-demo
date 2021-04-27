import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsIndexPageModule } from './products-index-page/products-index-page.module';
import { ProductDetailPageModule } from './product-detail-page/product-detail-page.module';

@NgModule({
  imports: [
    ProductsIndexPageModule,
    ProductDetailPageModule,
  ],
  exports: [RouterModule]
})
export class ProductsShellRoutingModule { }
