import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardModule } from "@nx-monorepo-demo/first-client/segments/products/ui";
import { ProductsIndexPageRoutingModule } from "./products-index-page-routing.module";
import { ProductsIndexPageComponent } from "./products-index-page/products-index-page.component";

@NgModule({
  declarations: [ProductsIndexPageComponent],
  imports: [CommonModule, ProductsIndexPageRoutingModule, ProductCardModule],
})
export class ProductsIndexPageModule {}
