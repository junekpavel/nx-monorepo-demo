import { InjectionToken } from '@angular/core';
import { ProductsResourceConfiguration } from '../interfaces/products-resource-configuration';

export const PRODUCTS_RESOURCE_CONFIGURATION = new InjectionToken<ProductsResourceConfiguration>(
  "Essential configuration for products segment resources."
);
