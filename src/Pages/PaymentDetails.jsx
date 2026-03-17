import Header from "../Components/Header";
import HomeCheckout from "../Components/shipping/HomeCheckout";
import Footer from "../Components/Footer";
import Summarycard from "../Components/shipping/Summarycard";
import { CiCreditCard2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div>
      <Header />
      <HomeCheckout />

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-30 max-w-7xl mx-auto mt-10 px-4">
        <div className="w-full lg:w-auto">
          <Link to="/shipping">
            <button className="text-gray-400 hover:border-gray-700 text-sm cursor-pointer">
              ← Back
            </button>
          </Link>

          <p className="flex items-center gap-3 mb-5 mt-8">
            <CiCreditCard2 className="text-2xl" />
            Payment Details
          </p>

          <div className="space-y-3 w-full lg:w-150">
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full bg-gray-200 p-3 outline-none"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-full bg-gray-200 p-3 outline-none"
            />

            <div className="flex flex-col sm:flex-row gap-5">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full sm:w-1/2 bg-gray-200 p-3 outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full sm:w-1/2 bg-gray-200 p-3 outline-none"
              />
            </div>
            <Link to="/review">
              <button className="w-full cursor-pointer bg-[#D47784] text-white py-3 mt-6 tracking-wide hover:bg-[#cd6472] transition">
                REVIEW ORDER
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <Summarycard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentDetails;
