import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useQueryClient } from "@tanstack/react-query";

export default function CheckOut() {
  const stripe = useStripe();
  const elements = useElements();
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/order-confirmed",
      },
    });
    queryClient.invalidateQueries({ queryKey: ["orders"] });
    if (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full lg:w-150">
      <PaymentElement />
      <button className="px-2 py-2 cursor-pointer text-white bg-[#D47784] w-full mt-3">
        Pay Now
      </button>
    </form>
  );
}
