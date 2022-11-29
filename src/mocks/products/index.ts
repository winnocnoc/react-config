import { ProductAPIs } from '../../apis/products';
import { API } from './../../apis/apis';

export const MockProducts: Record<ProductAPIs, string> = {
  [API.ProductAPIs.GET_PRODUCTS_LIST]: 'products/products.json',
  [API.ProductAPIs.CREATE_PRODUCT]: 'products/product.json',
};
