import { Injectable } from '@angular/core';
import { ProductsDataAccessModule } from './products-data-access.module';
import { Product } from '@nx-monorepo-demo/first-client/segments/products/util';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ProductsDataAccessModule,
})
export class ProductsApiService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<{data: Product[]}>('https://run.mocky.io/v3/b8af30ea-4916-476a-b665-cdf35a965874')
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
