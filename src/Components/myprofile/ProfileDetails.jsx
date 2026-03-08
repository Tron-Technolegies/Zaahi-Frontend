import React from "react";
import Sidebar from "./Sidebar";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
      <Sidebar />

      <div className="flex-1 md:px-16 lg:px-30 mt-8 md:mt-10">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 mb-8">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 max-w-3xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col text-xs">
              First Name
              <input
                type="text"
                placeholder="Ex. John"
                className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none w-full"
              />
            </label>

            <label className="flex flex-col text-xs">
              Last Name
              <input
                type="text"
                placeholder="Ex. Doe"
                className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none w-full"
              />
            </label>
          </div>

          <label className="flex flex-col text-xs">
            Email
            <input
              type="text"
              placeholder="Email Address"
              className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none w-full"
            />
          </label>

          <label className="flex flex-col text-xs">
            Mobile
            <input
              type="text"
              placeholder="+91 9876543213"
              className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none w-full"
            />
          </label>

          <button className="bg-[#D47784] text-white px-12 py-3 mt-2 hover:bg-[#cd6472] transition w-fit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
