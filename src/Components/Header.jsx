import React, { useContext, useState } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiHeart,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/user/useCurrentUser";
import { Menu, MenuItem } from "@mui/material";
import { useSignOut } from "../hooks/auth/useSignin";
import { UserContext } from "../UserContext";

const Header = () => {
  const { isError, isLoading, error, data: user } = useCurrentUser();
  const { currentUser } = useContext(UserContext);
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
    <nav className="flex items-center justify-between px-4 md:px-8 h-18 bg-white border-b border-gray-100 relative">
      {/* Mobile Menu Button */}
      <div className="flex md:hidden flex-1">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#615226] p-2"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 items-center space-x-8 text-sm font-medium text-[#615226] ml-10">
        <Link to="/collections" className="hover:opacity-70 transition-colors">
          Collections
        </Link>
        <Link to="/categories" className="hover:opacity-70 transition-colors">
          Categories
        </Link>
        {/* <Link to="/collections" className="hover:opacity-70 transition-colors">
          New Arrivals
        </Link> */}
      </div>

      {/* Logo */}
      <div className="h-full flex items-center shrink-0 z-20">
        <Link to="/">
          <img
            src="/Logo/Logo.png"
            alt="Zaahi Designs"
            className="h-16 md:h-28 w-auto object-contain transform"
          />
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-end space-x-3 md:space-x-6 text-[#6B6B6B]">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/wishlist">
            <button className="hover:opacity-70 transition-colors">
              <FiHeart className="md:size-5.5 mt-2 cursor-pointer" />
            </button>
          </Link>
          <Link to="/cart" className="relative">
            <button className="hover:opacity-70 transition-colors">
              <FiShoppingBag className="md:size-5.5 mt-2 cursor-pointer" />
            </button>
            {currentUser && (
              <p className="w-7 h-7 text-white flex justify-center items-center text-sm -top-3 -right-3 absolute rounded-full bg-[#D47784]">
                {currentUser.cart?.length || 0}
              </p>
            )}
          </Link>

          {currentUser ? (
            <div className="relative">
              {/* Avatar */}
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  onClick={handleMenuOpen}
                  className="w-9 h-9 rounded-full object-cover cursor-pointer"
                  alt="avatar"
                />
              ) : (
                <div
                  onClick={handleMenuOpen}
                  className="w-9 h-9 rounded-full bg-[#D47784] text-white flex items-center justify-center font-semibold cursor-pointer"
                >
                  {currentUser?.username?.[0]?.toUpperCase()}
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
                    navigate("/account/profile");
                  }}
                >
                  Account
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    navigate("/account/orders");
                  }}
                >
                  Orders
                </MenuItem>

                <MenuItem
                  onClick={async () => {
                    handleMenuClose();
                    await logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <button
              className="hover:opacity-70 transition-colors hidden md:block"
              onClick={() => navigate("/signin")}
            >
              <FiUser size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-18 left-0 w-full bg-white border-b border-gray-200 z-50 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 text-[#615226] font-medium">
            <Link to={"/collections"} onClick={() => setIsMenuOpen(false)}>
              Collections
            </Link>
            <Link to={"/categories"} onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link
              to={"/collections?filter=new-arrivals"}
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <hr />
            {user ? (
              <Link
                to={"/account/profile"}
                className="text-sm flex items-center gap-2"
              >
                <FiUser /> Account
              </Link>
            ) : (
              <Link
                to={"/signin"}
                className="p-2 text-center bg-[#D47784] text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
