import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 ">
      <button className="bg-[#D47784] px-30 py-5 text-white">My Profile</button>
      <button className="border border-[#E8E8E8] px-30 py-5">My Order</button>

      <button className="border border-[#E8E8E8] px-30 py-5">Saved Address</button>

      <button className="border border-[#E8E8E8] px-30 py-5">Change Password</button>
      <button className="border border-[#E8E8E8] px-30 py-5">Logout</button>
    </div>
  );
};

export default Sidebar;
