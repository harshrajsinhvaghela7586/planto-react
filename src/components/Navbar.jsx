import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-14 py-6 text-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-green-500"></div>
        <h1 className="text-2xl font-bold">Planto.</h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer transition">
          Home
        </li>
        <li className="hover:text-white cursor-pointer transition">
          Plant Type
        </li>
        <li className="hover:text-white cursor-pointer transition">
          More
        </li>
        <li className="hover:text-white cursor-pointer transition">
          Contact
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5 text-xl">
        <FiSearch className="cursor-pointer" />
        <FiShoppingBag className="cursor-pointer" />

        <button className="md:hidden">
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;