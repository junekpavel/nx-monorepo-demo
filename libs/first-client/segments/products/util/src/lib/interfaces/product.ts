import { ProductStatus } from '../enumerators/product-status';

export interface Product {

  id: number;
  name: string;
  description: string;
  imageId: number;
  priceEur: number;
  status: ProductStatus;

}
