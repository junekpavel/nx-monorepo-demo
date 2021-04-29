import { Inject, Injectable } from '@angular/core';
import { ProductsDataAccessModule } from './products-data-access.module';
import {
  Product,
  PRODUCTS_RESOURCE_CONFIGURATION,
  ProductsResourceConfiguration
} from '@nx-monorepo-demo/first-client/segments/products/util';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ProductsDataAccessModule,
})
export class ProductsApiService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(PRODUCTS_RESOURCE_CONFIGURATION) private readonly resourceConfiguration: ProductsResourceConfiguration,
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<{data: Product[]}>(this.resourceConfiguration.productsApiResourceUrl)
      .pipe(
        pluck('data'),
        delay(500),
      );
  }

  getSingle(id: number): Observable<Product> {
    return this.getAll()
      .pipe(
        mergeMap(products => {
          const product = products.find(p => p.id === id);
          if (product) {
            return of(product);
          }
          return throwError('Product not found.');
        }),
      );
  }

}
