import React from "react";

const AddressDetails = () => {
  return (
    <div className="mt-8">
      <p className="font-medium mb-2">Add New Address</p>
      <div className="mt-8">
        <div className="space-y-6 max-w-3xl ">
          <div className="grid grid-cols-2 gap-6">
            <label className="flex flex-col text-xs">
              First Name
              <input
                type="text"
                placeholder="Ex. John"
                className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none"
              />
            </label>

            <label className="flex flex-col text-xs">
              Last Name
              <input
                type="text"
                placeholder="Ex. Doe"
                className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col text-xs">
            Address
            <input
              type="text"
              placeholder="address"
              className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none"
            />
          </label>
          <label className="flex flex-col text-xs">
            Country
            <select className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none">
              <option>Country</option>
              <option>India</option>
              <option>UAE</option>
              <option>Qatar</option>
            </select>
          </label>

          <label className="flex flex-col text-xs">
            Email
            <input
              type="text"
              placeholder="Email Address"
              className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none"
            />
          </label>

          <label className="flex flex-col text-xs">
            Mobile
            <input
              type="text"
              placeholder="+91 9876543213"
              className="border border-[#E8E8E8] text-sm p-3 mt-2 outline-none"
            />
          </label>

          <button className="bg-[#D47784] text-white px-12 py-3 mt-2 hover:bg-[#cd6472] transition">
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
