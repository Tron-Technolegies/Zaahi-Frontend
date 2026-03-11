import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import YouMayLike from "../Components/Productdetails/YoumayLike";
import CartCard from "../Components/cart/CartCard";
import { useGetCart, useClearCart } from "../hooks/cart/useCart.js";

const Cart = () => {
  const { data, isLoading } = useGetCart();
  const { isPending: isClearing, mutateAsync: clearCart } = useClearCart();

  const cartItems = data?.cart || [];
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item?.product?.price * item?.qty || 0),
    0,
  );

  if (isLoading)
    return <div className="h-screen flex items-center justify-center">Loading cart...</div>;

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center mt-10 px-4 md:px-12 lg:px-24">
        <div className="flex gap-3 text-sm font-[Inter]">
          <a href="/">
            <button className="text-[#848484] cursor-pointer">Home &gt; &nbsp;</button>
          </a>
          <button>Cart</button>
        </div>
      </div>

      <div className="mt-10 md:mt-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[40vh]">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-medium font-[Bastoni]">
              Your Cart ({cartItems.length} items)
            </h2>
            {cartItems.length > 0 && (
              <button
                onClick={() => clearCart()}
                disabled={isClearing}
                className="text-sm font-[Inter] text-red-500 hover:text-red-700 font-medium"
              >
                {isClearing ? "Clearing..." : "Clear All"}
              </button>
            )}
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartCard key={item._id} item={item} />)
          ) : (
            <div className="py-20 text-center border border-dashed border-gray-300 rounded-xl">
              <p className="text-gray-500 font-[Inter] mb-4">Your cart is currently empty.</p>
              <a
                href="/collections"
                className="bg-[#D77C84] text-white px-8 py-3 font-[Inter] text-sm hover:opacity-90"
              >
                CONTINUE SHOPPING
              </a>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border border-[#E8E8E8] rounded-2xl p-6 md:p-8 sticky top-24 shadow-sm">
              <h3 className="text-xl font-medium font-[Bastoni] mb-6">Order Summary</h3>

              <div className="flex justify-between mb-4 font-[Inter] text-[#777777]">
                <p>Subtotal</p>
                <p className="font-semibold text-black">${subtotal}</p>
              </div>

              <div className="flex justify-between mb-6 font-[Inter] text-[#777777] pb-6 border-b border-gray-100">
                <p>Shipping</p>
                <p>Calculated at checkout</p>
              </div>

              <div className="flex justify-between mb-8 font-[Inter] text-lg font-bold">
                <p>Total</p>
                <p>${subtotal}</p>
              </div>

              <a href="/checkout" className="block w-full">
                <button className="w-full bg-[#D77C84] text-white hover:bg-[#b05f66] py-4 font-[Inter] text-sm font-medium transition duration-300">
                  PROCEED TO CHECKOUT
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <YouMayLike />
      <Footer />
    </div>
  );
};

export default Cart;
