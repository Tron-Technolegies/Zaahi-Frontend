import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import SingleOrderDetails from "./SingleOrderDetails";

export default function OrderCard({ order }) {
  const [showDetails, setShowDetails] = useState(false);
  const statusColour =
    order.status === "Pending"
      ? "bg-yellow-200 text-yellow-600"
      : order.status === "Confirmed"
        ? "bg-gray-200 text-gray-600"
        : order.status === "Shipped"
          ? "bg-blue-200 text-blue-600"
          : order.status === "Delivered"
            ? "bg-green-200 text-green-600"
            : "bg-red-200 text-red-600";

  const paymentStatus =
    order.paymentStatus === "pending"
      ? "bg-yellow-200 text-yellow-600"
      : order.paymentStatus === "succeeded"
        ? "bg-green-200 text-green-600"
        : order.paymentStatus === "failed"
          ? "bg-red-200 text-red-600"
          : "bg-gray-200 text-gray-600";
  return (
    <div className="p-5 border border-[#E8E8E8] flex justify-between items-center shadow rounded-2xl">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-sm border-b pb-2 border-[#E8E8E8]">
          <p className={`${statusColour} p-1 rounded-md text-xs`}>
            {order.status}
          </p>
          |<p>{new Date(order.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative w-fit overflow-hidden">
            <img
              src={order.orderItems?.[0].image}
              alt="product image"
              className="w-20  object-cover rounded-xl"
            />
            {order.orderItems?.length > 1 && (
              <div className="absolute inset-0 opacity-55 left-2 top-2 bg-black rounded-xl text-white flex justify-center items-center">
                <p className="font-bold"> + {order.orderItems.length - 1}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">
              Order Id: <span className="font-light">{order._id}</span>
            </p>
            <p className="text-sm font-medium">
              Payment Status:{" "}
              <span className={` ${paymentStatus} p-1 text-xs rounded-md`}>
                {order.paymentStatus}
              </span>
            </p>
            <p className="text-sm font-medium">
              Total Price:{" "}
              <span className="font-light">
                {order.totalPrice} {order.currency.toUpperCase()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => setShowDetails(true)}>
        <FaChevronRight />
      </button>
      <SingleOrderDetails
        open={showDetails}
        handleClose={() => setShowDetails(false)}
        order={order}
      />
    </div>
  );
}
