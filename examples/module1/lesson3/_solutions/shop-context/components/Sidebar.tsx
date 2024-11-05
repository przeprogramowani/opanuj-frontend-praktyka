import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { FiTrash2 } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isSidebarOpen ? 'right-0' : '-right-full'
      } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdClose className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> $ {total.toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={'/'}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
