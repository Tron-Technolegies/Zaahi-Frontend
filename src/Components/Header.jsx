import React, { useState } from "react";
import { FiSearch, FiShoppingBag, FiUser, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 h-18 bg-white border-b border-gray-100 relative">
      <div className="flex md:hidden flex-1">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#615226] p-2">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className="hidden md:flex flex-1 items-center space-x-8 text-sm font-medium text-[#615226] ml-10">
        <Link to="/collections" className="hover:opacity-70 transition-colors">
          Collections
        </Link>
        <a href="#" className="hover:opacity-70 transition-colors">
          Shop
        </a>
        <a href="#" className="hover:opacity-70 transition-colors">
          New Arrivals
        </a>
      </div>

      <div className="h-full flex items-center shrink-0 z-20">
        <img
          src="/Logo/Logo.png"
          alt="Zaahi Designs"
          className="h-16 md:h-28 w-auto object-contain transform"
        />
      </div>

      <div className="flex-1 flex items-center justify-end space-x-3 md:space-x-6 text-[#6B6B6B]">
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hover:opacity-70 transition-colors">
            <FiSearch className="md:size-5.5" />
          </button>
          <Link to="/wishlist">
            <button className="hover:opacity-70 transition-colors">
              <FiHeart className="md:size-5.5 mt-2" />
            </button>
          </Link>
          <button className="hover:opacity-70 transition-colors">
            <FiShoppingBag className="md:size-5.5" />
          </button>
          <button className="hover:opacity-70 transition-colors hidden md:block">
            <FiUser size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-18 left-0 w-full bg-white border-b border-gray-200 z-50 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 text-[#615226] font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Collections
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Shop
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              New Arrivals
            </a>
            <hr />
            <a href="#" className="text-sm flex items-center gap-2">
              <FiUser /> Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
