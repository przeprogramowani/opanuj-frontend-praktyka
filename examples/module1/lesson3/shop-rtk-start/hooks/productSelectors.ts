import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useProducts = () => useSelector((state: RootState) => state.product.products);
export const useProductsLoading = () => useSelector((state: RootState) => state.product.loading);
export const useProductsError = () => useSelector((state: RootState) => state.product.error);