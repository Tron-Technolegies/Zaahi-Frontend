import React from 'react';
import { FiSearch, FiShoppingBag, FiUser, FiChevronDown } from 'react-icons/fi';
import { TfiWorld } from 'react-icons/tfi';

const Header = () => {
  return (
    <nav className='flex items-center justify-between px-8 h-18 bg-white border-b border-gray-100'>
      <div className='flex-1 flex items-center space-x-8 text-sm font-medium text-[#615226] ml-10'>
        <a href='#' className='hover:opacity-70 transition-colors'>
          Collections
        </a>
        <a href='#' className='hover:opacity-70 transition-colors'>
          Shop
        </a>
        <a href='#' className='hover:opacity-70 transition-colors'>
          New Arrivals
        </a>
      </div>

      <div className='h-full flex items-center shrink-0'>
        <img
          src='/Logo/Logo.png'
          alt='Zaahi Designs'
          className='h-28 w-auto object-contain transform scale-100'
        />
      </div>

      <div className='flex-1 flex items-center justify-end space-x-6 text-[#6B6B6B]'>
        <div className='flex items-center space-x-1 text-sm cursor-pointer hover:opacity-70 transition-colors'>
          <TfiWorld className='text-lg' />
          <span>English</span>
          <FiChevronDown className='text-xs' />
        </div>

        <div className='flex items-center space-x-6 mr-10'>
          <button className='hover:opacity-70 transition-colors'>
            <FiSearch size={22} />
          </button>
          <button className='hover:opacity-70 transition-colors'>
            <FiShoppingBag size={22} />
          </button>
          <button className='hover:opacity-70 transition-colors'>
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
