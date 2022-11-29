import { z } from 'zod';
import { API } from '../../../apis/apis';
import { Axios, AxiosPromise } from '../../../apis/axiosInstance';

export const ProductSchema = z.object({
  name: z.string(),
  sku_number: z.string(),
});

export const ProductListSchema = z.object({
  products: z.array(ProductSchema),
});

export type ProductListModel = z.infer<typeof ProductListSchema>;
export type ProductModel = z.infer<typeof ProductSchema>;

export const getProducts = (): AxiosPromise<ProductListModel> => {
  return Axios.get(API.ProductAPIs.GET_PRODUCTS_LIST);
};
