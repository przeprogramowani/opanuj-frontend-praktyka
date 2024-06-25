import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProduct: builder.query<Product, string | undefined>({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = productsApi