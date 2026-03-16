import React, { useState } from 'react';
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiHeart,
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../hooks/user/useCurrentUser';
import { Menu, MenuItem } from '@mui/material';
import { useSignOut } from '../hooks/auth/useSignin';

const Header = () => {
  const { data: user } = useCurrentUser();
  const { mutateAsync: logout } = useSignOut();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='flex items-center justify-between px-4 md:px-8 h-18 bg-white border-b border-gray-100 relative'>
      {/* Mobile Menu Button */}
      <div className='flex md:hidden flex-1'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-[#615226] p-2'
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex flex-1 items-center space-x-8 text-sm font-medium text-[#615226] ml-10'>
        <Link to='/collections' className='hover:opacity-70 transition-colors'>
          Collections
        </Link>
        <a href='/categories' className='hover:opacity-70 transition-colors'>
          Categories
        </a>
        <a
          href='/collections?filter=new-arrivals'
          className='hover:opacity-70 transition-colors'
        >
          New Arrivals
        </a>
      </div>

      {/* Logo */}
      <div className='h-full flex items-center shrink-0 z-20'>
        <Link to='/'>
          <img
            src='/Logo/Logo.png'
            alt='Zaahi Designs'
            className='h-16 md:h-28 w-auto object-contain transform'
          />
        </Link>
      </div>

      {/* Right Section */}
      <div className='flex-1 flex items-center justify-end space-x-3 md:space-x-6 text-[#6B6B6B]'>
        <div className='flex items-center space-x-4 md:space-x-6'>
          <button className='hover:opacity-70 transition-colors'>
            <FiSearch className='md:size-5.5 cursor-pointer' />
          </button>
          <Link to='/wishlist'>
            <button className='hover:opacity-70 transition-colors'>
              <FiHeart className='md:size-5.5 mt-2 cursor-pointer' />
            </button>
          </Link>
          <Link to='/cart'>
            <button className='hover:opacity-70 transition-colors'>
              <FiShoppingBag className='md:size-5.5 mt-2 cursor-pointer' />
            </button>
          </Link>

          {user ? (
            <div className='relative'>
              {/* Avatar */}
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  onClick={handleMenuOpen}
                  className='w-9 h-9 rounded-full object-cover cursor-pointer'
                  alt='avatar'
                />
              ) : (
                <div
                  onClick={handleMenuOpen}
                  className='w-9 h-9 rounded-full bg-[#D47784] text-white flex items-center justify-center font-semibold cursor-pointer'
                >
                  {user?.username?.[0]?.toUpperCase()}
                </div>
              )}

              {/* Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    navigate('/myprofile');
                  }}
                >
                  Account
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    navigate('/orders');
                  }}
                >
                  Orders
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <button
              className='hover:opacity-70 transition-colors hidden md:block'
              onClick={() => navigate('/signin')}
            >
              <FiUser size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-18 left-0 w-full bg-white border-b border-gray-200 z-50 md:hidden animate-in slide-in-from-top duration-300'>
          <div className='flex flex-col p-6 space-y-4 text-[#615226] font-medium'>
            <a href='#' onClick={() => setIsMenuOpen(false)}>
              Collections
            </a>
            <a href='#' onClick={() => setIsMenuOpen(false)}>
              Shop
            </a>
            <a href='#' onClick={() => setIsMenuOpen(false)}>
              New Arrivals
            </a>
            <hr />
            <a href='#' className='text-sm flex items-center gap-2'>
              <FiUser /> Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
