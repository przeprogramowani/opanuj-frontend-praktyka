// import { createContext, useEffect, useState } from 'react';
// import { Product } from '../types/Product';

// type ProductContextType = {
//   products: Product[];
// };

// export const ProductContext = createContext<ProductContextType>({
//   products: [],
// });

// const ProductProvider = ({ children }: { children: React.ReactNode }) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ products }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;
