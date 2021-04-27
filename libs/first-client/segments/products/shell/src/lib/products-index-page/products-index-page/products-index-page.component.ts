import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsApiService } from '@nx-monorepo-demo/first-client/segments/products/data-access';
import { Observable } from 'rxjs';
import { Product } from '@nx-monorepo-demo/first-client/segments/products/util';
import { publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'nx-monorepo-demo-products-index-page',
  templateUrl: './products-index-page.component.html',
  styleUrls: ['./products-index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsIndexPageComponent {

  readonly products$: Observable<Product[]> = this.productsApiService.getAll()
    .pipe(
      publishReplay(1),
      refCount(),
    );

  constructor(
    private readonly productsApiService: ProductsApiService,
  ) { }

}
