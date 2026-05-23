import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full relative z-50 px-5 sm:px-8 lg:px-14 py-6 text-white">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-green-600 shadow-[0_0_30px_rgba(34,197,94,0.5)]"></div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Planto.
          </h1>

        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-12 text-sm text-gray-300">

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Plant Type
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            More
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-xl">

          <FiSearch className="cursor-pointer hover:scale-110 transition" />

          <FiShoppingBag className="cursor-pointer hover:scale-110 transition" />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full transition-all duration-500 overflow-hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-5 mt-4 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6">

          <ul className="flex flex-col gap-6 text-gray-200">

            <li className="hover:text-white transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Plant Type
            </li>

            <li className="hover:text-white transition cursor-pointer">
              More
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;