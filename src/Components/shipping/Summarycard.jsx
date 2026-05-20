import React, { useContext, useEffect, useState } from "react";
import Picture from "../Productdetails/Picture";
import { useGetCart } from "../../hooks/cart/useCart";
import Loading from "../Loading";
import { UserContext } from "../../UserContext";

const Summarycard = () => {
  const { isLoading, isError, error, data } = useGetCart();
  const { currency, exchange, currentUser } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (!currentUser) {
      const localCart = JSON.parse(localStorage.getItem("zaahi-cart")) || [];
      setTotalPrice(
        localCart.reduce(
          (sum, item) => sum + item.qty * item.variant?.size?.price,
          0,
        ),
      );
      setCartItems(localCart);
    }
    if (data) {
      setTotalPrice(
        data.cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      );
      setCartItems(data.cart);
    }
  }, [data, currentUser]);
  return (
    <div className="w-full flex justify-center lg:block">
      <div className="border border-gray-400 py-7 px-5 bg-gray-200 w-full max-w-sm lg:w-80">
        <p className="font-[Bastoni] text-sm">Order Summary</p>
        {cartItems?.map((item) => (
          <div
            className="flex gap-5 border-b border-gray-500 pb-6 mt-6"
            key={item._id || `${item.product?._id}-${item.variant?.size?.size}`}
          >
            <div className="w-16 h-20 border border-gray-300 bg-gray-100 flex items-center justify-center">
              <img
                src={item?.image || item?.product?.image?.url}
                alt="product"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col text-sm font-[Inter]">
              <p className="tracking-widest font-[Be Vietnam Pro]">
                {item?.productName || item?.product?.productName}
              </p>
              <p className="text-gray-400 text-sm">
                Size: {item?.size || item?.variant?.size?.size}
              </p>
              <p className="text-gray-400 text-sm">Qty: {item?.qty}</p>
              <p>
                {currency === "INR"
                  ? `Rs ${item?.price || item?.variant?.size?.price}`
                  : currency === "AED" && exchange
                    ? `AED ${((item?.price || item?.variant?.size?.price) * exchange?.INRtoAED).toFixed(2)}`
                    : `Rs ${item?.price}`}{" "}
                x {item.qty}
              </p>
            </div>
          </div>
        ))}

        <div className="space-y-4 text-gray-600 text-sm mt-6 font-[Inter]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              {currency === "INR"
                ? `Rs ${totalPrice}`
                : currency === "AED" && exchange
                  ? `AED ${(totalPrice * exchange?.INRtoAED).toFixed(2)}`
                  : `Rs ${totalPrice}`}
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
            {currency === "INR"
              ? `Rs ${totalPrice}`
              : currency === "AED" && exchange
                ? `AED ${(totalPrice * exchange?.INRtoAED).toFixed(2)}`
                : `Rs ${totalPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summarycard;
