import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiKey2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

export default function AccountSettings() {
  const links = [
    {
      id: 1,
      icon: <CgProfile />,
      name: "My Profile",
      url: "account/profile",
      word: "profile",
    },
    {
      id: 2,
      icon: <FaClipboardList />,
      name: "My Orders",
      url: "account/orders",
      word: "orders",
    },
    {
      id: 3,
      icon: <FaLocationDot />,
      name: "My Addresses",
      url: "account/address",
      word: "address",
    },
    {
      id: 4,
      icon: <RiKey2Fill />,
      name: "Change Password",
      url: "account/password",
      word: "password",
    },
  ];
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="text-black min-h-screen">
      <p className="bg-[#F5F5F5] py-7 text-center font-semibold">My Account</p>
      <div className="flex md:flex-row flex-col gap-3 items-start md:px-30 px-5 ">
        <div className="flex md:flex-col flex-row justify-between gap-3 p-7 h-full border-r md:w-1/3 w-full border-[#E8E8E8]">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className={`p-3 flex gap-2 items-center border border-[#E8E8E8] hover:bg-[#D47784] hover:text-white ${pathname.includes(item.word) && "bg-[#D47784] text-white"}`}
            >
              <span className="md:text-base text-2xl">{item.icon}</span>{" "}
              <span className="hidden md:block">{item.name}</span>
            </Link>
          ))}
          <button className="p-3 hidden md:flex gap-2 items-center border border-[#E8E8E8] hover:bg-[#D47784] hover:text-white">
            <CiLogout />
            Logout
          </button>
        </div>
        <button className="p-3 md:hidden flex gap-2 items-center border border-[#E8E8E8] hover:bg-[#D47784] hover:text-white">
          <CiLogout />
          Logout
        </button>
        <div className="p-5 md:2/3 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
