import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsDataAccessModule } from "@nx-monorepo-demo/first-client/segments/products/data-access";
import { ProductsShellRoutingModule } from "./products-shell-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsShellRoutingModule, ProductsDataAccessModule],
})
export class ProductsShellModule {}
