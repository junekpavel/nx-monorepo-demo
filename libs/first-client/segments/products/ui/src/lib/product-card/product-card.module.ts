import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedUiButtonsModule } from "@nx-monorepo-demo/shared/ui/buttons";
import { ProductCardComponent } from "./product-card/product-card.component";

@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [CommonModule, RouterModule, SharedUiButtonsModule],
})
export class ProductCardModule {}
