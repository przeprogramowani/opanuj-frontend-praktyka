import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

import { CartContext } from '../contexts/CartContext';
import { CartItem as CartItemType } from '../types/CartItem';

const CartItem = ({ item }: { item: CartItemType }) => {
  const { removeFromCart, addToCart, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="h-full flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => addToCart(item)}
                className="h-full flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center">
              $ {price}
            </div>
            <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
