import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productsApi } from '../services/productsApi';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
