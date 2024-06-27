import { BsBag } from 'react-icons/bs';
import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { selectItemAmount } from '../state/cartSlice';
import { useAppSelector } from '../hooks/rtk';

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsSidebarOpen }: HeaderProps) => {
  const itemAmount = useAppSelector(selectItemAmount);

  return (
    <header className={`bg-none py-6 fixed w-full z-10 lg:px-8 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/`} className="cursor-pointer ml-8">
          <CiShop className="text-3xl " />
        </Link>
        <div
          onClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
          className="cursor-pointer flex relative mr-8"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
