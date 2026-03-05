import React from "react";
import Sidebar from "./Sidebar";

const ProfileDetails = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <Sidebar />

      <div className="flex-1 px-20 mt-10">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 mb-8">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 max-w-3xl">
          <div className="grid grid-cols-2 gap-6">
            <label className="flex flex-col text-sm">
              First Name
              <input
                type="text"
                placeholder="Ex. John"
                className="border border-[#E8E8E8] p-3 mt-2 outline-none"
              />
            </label>

            <label className="flex flex-col text-sm">
              Last Name
              <input
                type="text"
                placeholder="Ex. Doe"
                className="border border-[#E8E8E8] p-3 mt-2 outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm">
            Email
            <input
              type="text"
              placeholder="Email Address"
              className="border border-[#E8E8E8] p-3 mt-2 outline-none"
            />
          </label>

          <label className="flex flex-col text-sm">
            Mobile
            <input
              type="text"
              placeholder="+91 9876543213"
              className="border border-[#E8E8E8] p-3 mt-2 outline-none"
            />
          </label>

          <button className="bg-[#D47784] text-white px-12 py-3 mt-2 hover:bg-[#cd6472] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
