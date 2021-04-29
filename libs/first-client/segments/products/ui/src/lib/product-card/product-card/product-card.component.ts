import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Product } from "@nx-monorepo-demo/first-client/segments/products/util";

@Component({
  selector: "nx-monorepo-demo-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product?: Product;
  @Input() productDetailLink?: string;
}
