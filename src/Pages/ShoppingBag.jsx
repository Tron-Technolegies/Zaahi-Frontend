import React, { useState } from "react";
import ProductReviews from "./ProductReviews";
import Picture from "../Components/Productdetails/Picture";

const ShoppingBag = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = product?.stock || 5;

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative min-h-screen tracking-wide">
      <div className="blur-md transition-all duration-300">
        <ProductReviews />
      </div>

      <div className="fixed top-0 right-0 h-[600px] w-[420px] bg-white border border-[#D9D9D9] shadow-md z-50">
        <div className="flex justify-between items-center p-5 border-b border-[#D9D9D9] ">
          <p className="font-medium font-[Bastoni]">Shopping Bag</p>
          <span className="cursor-pointer text-xl">×</span>
        </div>

        <div className="py-15 px-8 border-b border-[#D9D9D9] flex gap-5 font-[Inter]">
          <Picture />
          <div>
            <p className="font-medium text-sm ">{product?.productName?.toUpperCase() || "RAW SILK WITH NET DUPATTA"}</p>
            <p className="text-xs text-gray-500">Zahi</p>
            <p className="font-semibold mt-1">${product?.price || "12,500"}</p>

            <div className="flex items-center text-sm gap-2 mt-2 border border-[#D9D9D9] w-fit px-4 py-1">
              <button
                onClick={handleDecrease}
                className={`text-lg px-2 ${quantity <= 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer font-bold"}`}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-2 font-medium">{quantity}</span>
              <button
                onClick={handleIncrease}
                className={`text-lg px-2 ${quantity >= stock ? "opacity-30 cursor-not-allowed" : "cursor-pointer font-bold"}`}
                disabled={quantity >= stock}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 mt-10 font-[Inter] ">
          <div className="flex justify-between mb-2">
            <p className="font-medium">Subtotal</p>
            <p className="font-semibold">$12,500</p>
          </div>

          <p className="text-sm text-[#777777] mb-4">Taxes and shipping calculated at checkout</p>

          <button className="w-full bg-[#D77C84]  text-white py-2 text-sm mb-2">
            PROCEED TO CHECKOUT
          </button>

          <p className="text-center text-sm hover:underline cursor-pointer">Continue Shopping</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
