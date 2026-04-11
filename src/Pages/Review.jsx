import Header from "../Components/Header";
import HomeCheckout from "../Components/shipping/HomeCheckout";
import Summarycard from "../Components/shipping/Summarycard";
import Footer from "../Components/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";

const Review = () => {
  return (
    <div>
      <HomeCheckout />
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-30 max-w-7xl mx-auto mt-24 px-4">
        <div className="w-full lg:w-auto">
          <Link to="/payment-details">
            <button className="text-gray-400 hover:border-gray-700 text-sm cursor-pointer">
              ← Back
            </button>
          </Link>

          <p className="flex items-center gap-3 mb-5 mt-8">
            <IoLocationOutline className="text-2xl" />
            Shipping to:
          </p>

          <div className=" w-full lg:w-150 ">
            <input
              type="text"
              placeholder="Address Details"
              className="w-full h-50 flex items-start bg-gray-200 p-3 outline-none"
            />

            <button className="w-full bg-[#D47784] flex items-center justify-center gap-4  text-white py-3 mt-6 tracking-wide hover:bg-[#cd6472] transition">
              PLACE ORDER <IoLockClosedOutline className="text-lg" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <Summarycard />
        </div>
      </div>
    </div>
  );
};

export default Review;
