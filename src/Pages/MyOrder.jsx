import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeadName from "../Components/myprofile/HeadName";
import Sidebar from "../Components/myprofile/Sidebar";
import OrderCard from "../Components/myorder/OrderCard";

const MyOrder = () => {
  return (
    <div>
      <Header />
      <HeadName />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
        <Sidebar />

        <div className="flex-1 md:px-16 lg:px-30 mt-8 md:mt-10">
          <div className="flex flex-wrap gap-3 md:gap-5">
            <button className="border rounded-3xl px-5 py-1">All</button>

            <button className="border border-[#A6A6A4] rounded-3xl px-5 py-1 text-gray-500">
              In Progress
            </button>

            <button className="border border-[#A6A6A4] rounded-3xl px-5 py-1 text-gray-500">
              Delivered
            </button>

            <button className="border border-[#A6A6A4] rounded-3xl px-5 py-1 text-gray-500">
              Cancelled
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-10 w-full max-w-[700px]">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrder;
