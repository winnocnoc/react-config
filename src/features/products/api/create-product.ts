import { z } from 'zod';
import { API } from '../../../apis/apis';
import { Axios, AxiosPromise } from '../../../apis/axiosInstance';
import { ProductListModel } from './get-products';

const CreateProductSchema = z.object({
  name: z.string(),
});

export type CreateProductModel = z.infer<typeof CreateProductSchema>;

export const createProduct = (
  payload: CreateProductModel
): AxiosPromise<ProductListModel> => {
  return Axios.post(API.ProductAPIs.CREATE_PRODUCT, payload);
};
