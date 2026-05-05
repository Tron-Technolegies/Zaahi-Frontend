import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeCheckout from "../Components/shipping/HomeCheckout";
import ShippingInfo from "../Components/shipping/ShippingInfo";
import { useState } from "react";
import CheckOut from "../Components/shipping/CheckOut";
import Summarycard from "../Components/shipping/Summarycard";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../stripe/stripe";

const Shipping = () => {
  const [active, setActive] = useState("shipping");
  const [clientSecret, setClientSecret] = useState("");
  return (
    <div className="mt-24">
      <HomeCheckout active={active} />
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-30 max-w-7xl mx-auto mt-10 px-4">
        {active === "shipping" && (
          <ShippingInfo
            setActive={setActive}
            setClientSecret={setClientSecret}
          />
        )}
        {/* {active === "checkout" && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckOut />
          </Elements>
        )} */}
        {/* {active === "checkout" && <CheckOut orderData={data} />} */}
        <div className="w-full lg:w-auto">
          <Summarycard />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
