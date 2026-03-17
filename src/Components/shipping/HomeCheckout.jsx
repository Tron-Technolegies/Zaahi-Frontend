import React from "react";
import { Link } from "react-router-dom";

const HomeCheckout = ({ active }) => {
  return (
    <div>
      <div className="flex items-center max-w-7xl mx-auto px-4 gap-3 text-sm font-[Inter] mt-15">
        <Link to="/">
          <button className="text-[#848484] cursor-pointer">Home &gt;</button>
        </Link>
        <button>Checkout</button>
      </div>
      <div className="md:px-20 px-3 py-10 md:max-w-7xl mx-auto">
        <p className="font-[Bastoni] mb-8 text-xl">Secure Checkout</p>
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#D47784] text-white font-medium">
              1
            </div>
            <span className="text-gray-800 font-medium">Shipping</span>
          </div>

          <div className="w-18 h-px bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${active === "checkout" ? "bg-[#D47784] text-white" : "bg-gray-300 text-gray-600"}`}
            >
              2
            </div>
            <span className="text-gray-400">Payment</span>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default HomeCheckout;
