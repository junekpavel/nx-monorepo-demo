import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { SharedUiButtonsModule } from '@nx-monorepo-demo/shared/ui/buttons';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedUiButtonsModule
  ]
})
export class ProductCardModule { }
