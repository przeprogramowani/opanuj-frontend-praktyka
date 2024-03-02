import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CartItem } from '../types/CartItem.ts';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<CartItem[], void>({
      query: () => 'products',
    }),
    getProductById: builder.query<CartItem, string>({
      query: (id) => `products/${id}`,
    })
  }),
})

productsApi.useGetProductByIdQuery
export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi