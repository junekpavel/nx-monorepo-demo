import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailPageRoutingModule } from "./product-detail-page-routing.module";
import { ProductDetailPageComponent } from "./product-detail-page/product-detail-page.component";

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [CommonModule, ProductDetailPageRoutingModule],
})
export class ProductDetailPageModule {}
