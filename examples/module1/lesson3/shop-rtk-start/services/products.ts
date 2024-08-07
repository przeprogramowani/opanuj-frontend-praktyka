import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], string>({
      query: () => `/`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
