// import { createContext, useEffect, useState } from 'react';
// import { Product } from '../types/Product';

// type CartItem = Product & { amount: number };

// type CartContextType = {
//   cart: CartItem[];
//   itemAmount: number;
//   total: number;
//   addToCart: (product: Product | CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   decreaseAmount: (id: number) => void;
// };

// export const CartContext = createContext<CartContextType>(
//   {} as CartContextType // typescript hack to avoid initializing context with undefined, use this context only with a provider
// );

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [itemAmount, setItemAmount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const total = cart.reduce((accumulator, currentItem) => {
//       return accumulator + currentItem.price * currentItem.amount;
//     }, 0);
//     setTotalPrice(total);
//   }, [cart]);

//   useEffect(() => {
//     const amount = cart.reduce((accumulator, currentItem) => {
//       return accumulator + currentItem.amount;
//     }, 0);
//     setItemAmount(amount);
//   }, [cart]);

//   const addToCart = (product: Product | CartItem) => {
//     const cartItem = cart.find((item) => {
//       return item.id === product.id;
//     });

//     if (cartItem) {
//       const newCart = cart.map((item) =>
//         item.id === product.id ? { ...item, amount: cartItem.amount + 1 } : item
//       );
//       setCart(newCart);
//     } else {
//       const newItem = { ...product, amount: 1 };
//       setCart([...cart, newItem]);
//     }
//   };

//   const decreaseAmount = (id: number) => {
//     const cartItem = cart.find((item) => item.id === id);

//     if (!cartItem) {
//       return;
//     }

//     if (cartItem.amount <= 1) {
//       removeFromCart(id);
//       return;
//     }

//     const newCart = cart.map((item) =>
//       item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
//     );
//     setCart(newCart);
//   };

//   const removeFromCart = (id: number) => {
//     const newCart = cart.filter((item) => {
//       return item.id !== id;
//     });
//     setCart(newCart);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         decreaseAmount,
//         itemAmount,
//         total: totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
