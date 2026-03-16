import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Shipping", "Payment", "Review"];

const HomeCheckout = () => {
  return (
    <div>
      <div className="flex items-center max-w-7xl mx-auto px-4 gap-3 text-sm font-[Inter] mt-15">
        <Link to="/">
          <button className="text-[#848484] cursor-pointer">Home &gt;</button>
        </Link>
        <button>Checkout</button>
      </div>
      <div className="px-20 py-10 max-w-7xl mx-auto">
        <p className="font-[Bastoni] mb-8 text-xl">Secure Checkout</p>
      </div>
    </div>
  );
};

export default HomeCheckout;
