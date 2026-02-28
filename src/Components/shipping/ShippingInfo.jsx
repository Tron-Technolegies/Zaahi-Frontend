import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import Summarycard from "./Summarycard";

const ShippingInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-30 max-w-7xl mx-auto mt-10 px-4">
      <div className="w-full lg:w-auto">
        <p className="flex items-center gap-3 mb-5">
          <MdOutlineLocalShipping className="text-2xl" />
          Shipping Information
        </p>

        <div className="space-y-3 w-full lg:w-[600px]">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full sm:w-1/2 bg-gray-200 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full sm:w-1/2 bg-gray-200 p-3 outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Email Address"
            className="w-full bg-gray-200 p-3 outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="City"
              className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none"
            />
            <select className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none">
              <option>Country</option>
              <option>India</option>
              <option>UAE</option>
              <option>Qatar</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-gray-200 p-3 outline-none"
          />

          <button className="w-full bg-[#D47784] text-white py-3 mt-6 tracking-wide hover:bg-[#cd6472] transition">
            CONTINUE TO PAYMENT
          </button>
        </div>
      </div>

      <div className="w-full lg:w-auto">
        <Summarycard />
      </div>
    </div>
  );
};

export default ShippingInfo;
