import React, { useContext, useEffect, useState } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiHeart,
} from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/user/useCurrentUser";
import { Menu, MenuItem } from "@mui/material";
import { useSignOut } from "../hooks/auth/useSignin";
import { UserContext } from "../UserContext";
import { useGetCategories } from "../hooks/categories/useCategory";

const Header = () => {
  const { isError, isLoading, error, data: user } = useCurrentUser();
  const { currentUser, setCategory } = useContext(UserContext);
  const { data: categoriesData } = useGetCategories();
  const { mutateAsync: logout } = useSignOut();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("home");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // adjust this (0.2–0.5 feels best)
      },
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [location.pathname]);

  const isHomeTop = location.pathname === "/" && isHeroVisible;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      className={`flex items-center justify-between px-4 md:px-8 h-18 fixed left-0 top-0 z-50 w-full 
  transition-all duration-500 ease-in-out
  ${isHomeTop ? "bg-transparent text-white" : "bg-white text-black shadow-md"}
`}
    >
      {/* Mobile Menu Button */}
      <div className="flex md:hidden flex-1">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${isHomeTop ? "text-white" : "text-black"} p-2`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex flex-1 items-center space-x-8 text-sm font-medium ml-10 ${isHomeTop ? "text-white" : "text-black"}`}
      >
        <Link to="/collections" className="hover:opacity-70 transition-colors">
          Collections
        </Link>
        <div>
          <button
            onClick={(e) => setCategoryAnchorEl(e.currentTarget)}
            className="flex gap-2 items-center hover:opacity-70 transition-colors cursor-pointer focus:outline-none"
          >
            Categories <IoChevronDownOutline />
          </button>
          <Menu
            anchorEl={categoryAnchorEl}
            open={Boolean(categoryAnchorEl)}
            onClose={() => setCategoryAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                setCategoryAnchorEl(null);
                navigate("/categories");
              }}
            >
              All Categories
            </MenuItem>
            {categoriesData?.map((cat) => (
              <MenuItem
                key={cat._id}
                onClick={() => {
                  setCategoryAnchorEl(null);
                  setCategory(cat.categoryName);
                  navigate("/collections");
                }}
              >
                {cat.categoryName}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <button
          onClick={() => {
            if (location.pathname === "/") {
              document
                .getElementById("testimonials")
                .scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById("testimonials")
                  .scrollIntoView({ behavior: "smooth" });
              }, 300);
            }
          }}
          className="hover:opacity-70 transition-colors"
        >
          Testimonials
        </button>
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
      <div
        className={`${isHomeTop ? "text-white" : "text-black"} flex-1 flex items-center justify-end space-x-3 md:space-x-6 `}
      >
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
            <div className="flex flex-col space-y-4">
              <button
                className="text-left font-medium flex justify-between items-center"
                onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
              >
                Categories
                <span className="text-xl leading-none">
                  {isMobileCategoryOpen ? "-" : "+"}
                </span>
              </button>

              {isMobileCategoryOpen && (
                <div className="flex flex-col space-y-3 pl-4 border-l border-[#D47784]/30 ml-2 text-sm">
                  <Link to={"/categories"} onClick={() => setIsMenuOpen(false)}>
                    All Categories
                  </Link>
                  {categoriesData?.map((cat) => (
                    <button
                      key={cat._id}
                      className="text-left hover:text-[#D47784] transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setCategory(cat.categoryName);
                        navigate("/collections");
                      }}
                    >
                      {cat.categoryName}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
