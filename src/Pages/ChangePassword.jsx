import React from "react";
import Header from "../Components/Header";
import HeadName from "../Components/myprofile/HeadName";
import Footer from "../Components/Footer";
import Sidebar from "../Components/myprofile/Sidebar";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
//not responsive

const ChangePassword = () => {
  return (
    <div>
      <Header />
      <HeadName />
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-8">
        <Sidebar />

        <div className="flex-1 mt-8 lg:mt-10 lg:px-20">
          <div className="space-y-6 max-w-2xl w-full">
            <p className="font-medium mb-6 lg:mb-10">Current Password</p>

            <div>
              <label className="flex flex-col text-xs">Current Password</label>

              <div className="relative mt-2">
                <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                <input
                  type="text"
                  placeholder="current password"
                  className="border border-[#E8E8E8] text-sm p-4 pl-10 pr-10 w-full outline-none"
                />

                <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="flex flex-col text-xs">New Password</label>

              <div className="relative mt-2">
                <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                <input
                  type="text"
                  placeholder="new password"
                  className="border border-[#E8E8E8] text-sm p-4 pl-10 pr-10 w-full outline-none"
                />

                <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="flex flex-col text-xs">Confirm Password</label>

              <div className="relative mt-2">
                <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                <input
                  type="text"
                  placeholder="confirm password"
                  className="border border-[#E8E8E8] text-sm p-4 pl-10 pr-10 w-full outline-none"
                />

                <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <button className="bg-[#D47784] text-white px-10 py-3 mt-2 hover:bg-[#cd6472] transition w-full sm:w-fit">
              Change Password
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
