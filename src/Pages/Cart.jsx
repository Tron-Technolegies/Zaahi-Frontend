import React, { useContext, useEffect, useState } from "react";

import CartCard from "../Components/cart/CartCard";
import { useGetCart, useClearCart } from "../hooks/cart/useCart.js";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import Loading from "../Components/Loading.jsx";
import ExtraProducts from "../Components/Productdetails/ExtraProducts.jsx";

const Cart = () => {
  const { data, isLoading } = useGetCart();
  const { isPending: isClearing, mutateAsync: clearCart } = useClearCart();
  const { currentUser, exchange, currency } = useContext(UserContext);
  const [subTotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const total =
      data?.cart?.reduce((sum, item) => sum + item.qty * item.price, 0) ||
      JSON.parse(localStorage.getItem("zaahi-cart"))?.length;
    setSubTotal(total);
    const items =
      data?.cart || JSON.parse(localStorage.getItem("zaahi-cart")) || [];
    setCartItems(items);
  }, [data, localStorage]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex justify-between items-center mt-24 px-4 md:px-12 lg:px-24">
        <div className="flex gap-3 text-sm font-[Inter]">
          <Link to="/">
            <button className="text-[#848484] cursor-pointer">
              Home &gt; &nbsp;
            </button>
          </Link>
          <button>Cart</button>
        </div>
      </div>
      {/* <p className="text-xs text-red-500 my-5">
        The website is in test mode. Dont use any real money for transactions
      </p> */}
      <div className="mt-10 md:mt-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[40vh]">
        <div className="w-full lg:w-2/3 flex flex-col mx-auto items-center gap-6">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg w-full">
            <h2 className="text-xl font-medium font-[Bastoni]">
              Your Cart ({subTotal} items)
            </h2>
            {cartItems?.length > 0 && (
              <button
                onClick={async () => {
                  if (!currentUser) {
                    localStorage.setItem("zaahi-cart", JSON.stringify([]));
                    window.location.reload();
                    return;
                  }
                  await clearCart();
                }}
                disabled={isClearing}
                className="text-sm font-[Inter] text-red-500 hover:text-red-700 font-medium cursor-pointer"
              >
                {isClearing ? "Clearing..." : "Clear All"}
              </button>
            )}
          </div>

          {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
              <CartCard
                key={item._id || `${item.product}-${item.variant?.size}`}
                item={item}
              />
            ))
          ) : (
            <div className="py-20 text-center border border-dashed border-gray-300 rounded-xl w-full">
              <p className="text-gray-500 font-[Inter] mb-4">
                Your cart is currently empty.
              </p>
              <a
                href="/collections"
                className="bg-[#D77C84] text-white px-8 py-3 font-[Inter] text-sm hover:opacity-90"
              >
                CONTINUE SHOPPING
              </a>
            </div>
          )}
        </div>

        {data?.cart?.length > 0 && (
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border border-[#E8E8E8] rounded-2xl p-6 md:p-8 sticky top-24 ">
              <h3 className="text-xl font-medium font-[Bastoni] mb-6">
                Order Summary
              </h3>

              <div className="flex justify-between mb-4 font-[Inter] text-[#777777]">
                <p>Subtotal</p>
                <p className="font-semibold text-black">
                  {" "}
                  {currency === "INR"
                    ? ` Rs. ${subTotal}`
                    : currency === "AED" && exchange
                      ? `AED ${(subTotal * exchange?.INRtoAED).toFixed(2)}`
                      : ` Rs. ${subTotal}`}
                </p>
              </div>

              {/* <div className="flex justify-between mb-6 font-[Inter] text-[#777777] pb-6 border-b border-gray-100">
                <p>Shipping</p>
                <p>Calculated at checkout</p>
              </div> */}

              <div className="flex justify-between mb-8 font-[Inter] text-lg font-bold">
                <p>Total</p>
                <p>
                  {currency === "INR"
                    ? ` Rs. ${subTotal}`
                    : currency === "AED" && exchange
                      ? `AED ${(subTotal * exchange?.INRtoAED).toFixed(2)}`
                      : ` Rs. ${subTotal}`}
                </p>
              </div>

              <Link to="/shipping" className="block w-full">
                <button className="w-full bg-[#D77C84] text-white cursor-pointer hover:bg-[#b05f66] py-4 font-[Inter] text-sm font-medium transition duration-300">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <ExtraProducts />
    </div>
  );
};

export default Cart;
