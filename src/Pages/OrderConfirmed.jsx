import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <div className="md:w-1/2 w-11/12 p-5 shadow-md bg-white flex flex-col items-center text-black gap-3">
          <GiConfirmed size={46} fill="#D47784" />
          <p className="text-xl font-semibold">Payment Success</p>
          <p>You can check your orders for further details</p>
          <Link to={"/account/orders"} className="p-2 bg-[#D47784] text-white">
            Go to My Orders
          </Link>
        </div>
      </Backdrop>
    </>
  );
};

export default OrderConfirmed;
