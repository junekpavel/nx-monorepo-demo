import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsApiService } from "@nx-monorepo-demo/first-client/segments/products/data-access";
import { Product } from "@nx-monorepo-demo/first-client/segments/products/util";
import { Observable, of } from "rxjs";
import {
  catchError,
  map,
  publishReplay,
  refCount,
  switchMap,
} from "rxjs/operators";

@Component({
  selector: "nx-monorepo-demo-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent {
  readonly product$: Observable<
    Product | undefined
  > = this.activatedRoute.paramMap.pipe(
    map((paramMap) => paramMap.get("productId")),
    switchMap((productId: string | null) =>
      productId ? this.productsApiService.getSingle(+productId) : of(undefined),
    ),
    catchError(() => of(undefined)),
    publishReplay(1),
    refCount(),
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsApiService: ProductsApiService,
  ) {}
}
