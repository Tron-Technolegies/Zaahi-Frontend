import React from "react";
import Picture from "../Productdetails/Picture";
import { useGetCart } from "../../hooks/cart/useCart";
import Loading from "../Loading";

const Summarycard = () => {
  const { isLoading, isError, error, data } = useGetCart();
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    <div className="w-full flex justify-center lg:block">
      <div className="border border-gray-400 py-7 px-5 bg-gray-200 w-full max-w-sm lg:w-80">
        <p className="font-[Bastoni] text-sm">Order Summary</p>
        {data.cart?.map((product) => (
          <div
            className="flex gap-5 border-b border-gray-500 pb-6 mt-6"
            key={product._id}
          >
            <div className="w-16 h-20 border border-gray-300 bg-gray-100 flex items-center justify-center">
              <img
                src={product.product?.image}
                alt="product"
                className="object-contain h-full"
              />
            </div>

            <div className="flex flex-col text-sm font-[Inter]">
              <p className="tracking-widest font-[Be Vietnam Pro]">
                {product?.product?.productName}
              </p>
              <p className="text-gray-400">Qty: {product?.qty}</p>
              <p>${product?.product?.price}</p>
            </div>
          </div>
        ))}

        <div className="space-y-4 text-gray-600 text-sm mt-6 font-[Inter]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              ${" "}
              {data.cart.reduce(
                (sum, item) => sum + item.product.price * item.qty,
                0,
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>

        <div className="flex justify-between text-sm font-semibold mt-4">
          <span>Total</span>
          <span>
            ${" "}
            {data.cart.reduce(
              (sum, item) => sum + item.product.price * item.qty,
              0,
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summarycard;
