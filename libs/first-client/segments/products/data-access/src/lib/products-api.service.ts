import { Injectable } from '@angular/core';
import { ProductsDataAccessModule } from './products-data-access.module';
import { getMockProducts, Product } from '@nx-monorepo-demo/first-client/segments/products/util';
import { defer, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: ProductsDataAccessModule,
})
export class ProductsApiService {

  private readonly mockedProducts: Product[] = getMockProducts(20);

  getAll(): Observable<Product[]> {
    return of(this.mockedProducts)
      .pipe(
        delay(1000),
      );
  }

  getSingle(id: number): Observable<Product> {
    return defer(() => {
      const product = this.mockedProducts[id];
      if (product) {
        return of(product);
      }
      return throwError('Product not found.');
    })
      .pipe(
        delay(1000),
      )
  }

}
