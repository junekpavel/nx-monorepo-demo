import { Product } from '../interfaces/product';
import * as faker from 'faker';
import { ProductStatus } from '../enumerators/product-status';

const productStatusesValues: ProductStatus[] = Object.values(ProductStatus).filter(val => typeof val === 'number') as ProductStatus[];

export const getMockProducts: (length: number) => Product[] = (length = 10) => Array.from({length}, (_, i) => ({
  id: i,
  name: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  imageId: faker.datatype.number(),
  priceEur: +faker.commerce.price(),
  status: faker.random.arrayElement(productStatusesValues),
}));
