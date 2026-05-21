import React, { useContext, useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useGetCart } from "../../hooks/cart/useCart";
import Loading from "../Loading";
import { useCreatePayment } from "../../hooks/payment/useCreatePaymentIntent";
import { api } from "../../services/api";
import AddressInfo from "./AddressInfo";
import toast from "react-hot-toast";
import { UserContext } from "../../UserContext";
import { useQueryClient } from "@tanstack/react-query";

const ShippingInfo = ({ setActive, setClientSecret }) => {
  const { isLoading, data: cartData } = useGetCart();
  const [payLoading, setPayLoading] = useState(false);
  const queryClient = useQueryClient();
  const { currency, exchange, currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e) => {
    setPaymentLoading(true);
    try {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const addressData = Object.fromEntries(formdata);
      let itemsData = [];
      if (!currentUser) {
        const localCart = JSON.parse(localStorage.getItem("zaahi-cart")) || [];
        if (localCart.length < 1) return toast.error("Cart is Empty");
        itemsData = localCart.map((item) => {
          return {
            product: item?.product?._id,
            size: item?.variant?.size?.size,
            qty: item?.qty,
            price:
              currency === "INR"
                ? item?.variant?.size?.price
                : currency === "AED" && exchange
                  ? item?.variant?.size?.price * exchange?.INRtoAED
                  : item?.variant?.size?.price,
          };
        });
      } else {
        itemsData = cartData.cart?.map((item) => {
          return {
            product: item.productId,
            size: item.size,
            qty: item.qty,
            price:
              currency === "INR"
                ? item?.price
                : currency === "AED" && exchange
                  ? item?.price * exchange?.INRtoAED
                  : item?.price,
          };
        });
      }
      const reqBody = {
        items: JSON.stringify(itemsData),
        address: JSON.stringify(addressData),
        currency: currency,
      };
      const { data } = await api.post(`/razorpay/create-order`, reqBody);
      // setClientSecret(data.clientSecret);
      // setActive("checkout");
      openRazorpay(data);
    } catch (error) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setPaymentLoading(false);
    }
  };

  const openRazorpay = (order) => {
    const options = {
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      order_id: order.orderId,

      handler: async function (response) {
        setPayLoading(true);
        try {
          await api.post("/razorpay/verify-payment", response);
          console.log("RAZORPAY RESPONSE:", response);
          toast.success("Payment successful");
          if (currentUser) {
            window.location.href = "/order-confirmed";
            queryClient.invalidateQueries({ queryKey: ["cart"] });
          } else {
            localStorage.removeItem("zaahi-cart");
            navigate("/");
          }
        } catch (err) {
          toast.error("Verification failed");
        } finally {
          setPayLoading(false);
        }
      },

      prefill: {
        name: defaultAddress?.name,
        contact: defaultAddress?.phone,
      },

      theme: {
        color: "#D47784",
      },
      modal: {
        ondismiss: async function () {
          try {
            await api.post("/razorpay/cancel-payment", {
              razorpay_order_id: order.orderId,
            });

            toast("Payment cancelled");
            if (currentUser) {
              navigate("/account/orders");
            } else {
              navigate("/");
            }
          } catch (err) {
            console.error(err);
          }
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", async function (response) {
      try {
        await api.post("/razorpay/failed-payment", {
          razorpay_order_id: response.error.metadata.order_id,
        });

        toast.error("Payment failed");
      } catch (err) {
        console.error(err);
      }
    });

    rzp.open();
  };

  return isLoading || payLoading || paymentLoading ? (
    <Loading />
  ) : (
    <div className="w-full lg:w-auto">
      {currentUser && <AddressInfo setDefault={setDefaultAddress} />}
      <p className="flex items-center gap-3 my-5">
        <MdOutlineLocalShipping className="text-2xl" />
        Shipping Information
      </p>

      <form className="space-y-3 w-full lg:w-150" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Name"
          name="name"
          defaultValue={defaultAddress?.name}
          className="w-full bg-gray-200 p-3 outline-none"
          required
        />

        {!currentUser && (
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full bg-gray-200 p-3 outline-none"
            required
          />
        )}

        <input
          type="text"
          placeholder="Address Line 1"
          name="street"
          defaultValue={defaultAddress?.street}
          className="w-full bg-gray-200 p-3 outline-none"
          required
        />

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            name="state"
            defaultValue={defaultAddress?.state}
            placeholder="State"
            className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none"
            required
          />
          <input
            type="text"
            name="pin"
            defaultValue={defaultAddress?.pin}
            placeholder="Postal Code"
            className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none"
            required
          />
          <input
            className="w-full sm:w-1/3 bg-gray-200 p-3 outline-none"
            required
            type="text"
            name="country"
            placeholder="Country"
            defaultValue={defaultAddress?.country}
          />
        </div>

        <input
          type="text"
          name="phone"
          defaultValue={defaultAddress?.phone}
          placeholder="Phone Number"
          required
          className="w-full bg-gray-200 p-3 outline-none"
        />

        <button
          type="submit"
          disabled={paymentLoading}
          className="w-full bg-[#D47784] text-white py-3 mt-6 tracking-wide hover:bg-[#cd6472] transition cursor-pointer"
        >
          {paymentLoading ? "...." : "CONTINUE TO PAYMENT"}
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
