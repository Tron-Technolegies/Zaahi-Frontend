import React from "react";
import OrderCard from "../Components/orders/OrderCard";
import { useGetSingleOrder } from "../hooks/order/useOrder";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";

export default function SingleOrderStatus() {
  const { id } = useParams();
  const { isLoading, isError, data: order } = useGetSingleOrder({ id });

  const statusColour =
    order?.status === "Pending"
      ? "bg-yellow-200 text-yellow-600"
      : order?.status === "Confirmed"
        ? "bg-gray-200 text-gray-600"
        : order?.status === "Shipped"
          ? "bg-blue-200 text-blue-600"
          : order?.status === "Delivered"
            ? "bg-green-200 text-green-600"
            : "bg-red-200 text-red-600";

  const paymentStatus =
    order?.paymentStatus === "pending"
      ? "bg-yellow-200 text-yellow-600"
      : order?.paymentStatus === "succeeded"
        ? "bg-green-200 text-green-600"
        : order?.paymentStatus === "failed"
          ? "bg-red-200 text-red-600"
          : "bg-gray-200 text-gray-600";
  return (
    <div className="md:px-30 px-3 min-h-screen flex flex-col gap-3 items-center mt-10">
      <div className="h-full flex items-center">
        <Link to="/">
          <img
            src="/zaahi-logo.png"
            alt="Zaahi Designs"
            className=" w-28 py-1 object-cover transform"
          />
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <div className="p-5 border border-[#E8E8E8] w-full shadow rounded-2xl">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-2 items-center text-sm border-b pb-2 border-[#E8E8E8] w-full">
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
                    <p className="font-bold">
                      {" "}
                      + {order.orderItems.length - 1}
                    </p>
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
          <div className="mt-5">
            <p>Order Items</p>
            <div className="my-5 flex flex-col gap-3">
              {order.orderItems.map((item) => (
                <div
                  key={item._id}
                  className="p-3 px-5 border border-[#E8E8E8] rounded-md shadow-md flex gap-3 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-16 object-cover p-2 border rounded-md border-[#E8E8E8]"
                  />
                  <div>
                    <p>{item.productName}</p>
                    <p>Price: {item.price}</p>
                    <p>Qty: {item.qty}</p>
                    <p>Size: {item.variant.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium">Shipping Address</p>
            <div className="flex flex-col gap-1 border p-3 border-[#E8E8E8]">
              <p className="font-medium">{order.address.name}</p>
              <p className="font-light">
                {order.address.street}, {order.address.state} <br />{" "}
                {order.address.country}, {order.address.pin} <br />
                {order.address.phone}
              </p>
            </div>
          </div>
        </div>
      )}
      <Link className="px-4 py-2 bg-[#D47784] text-white rounded-sm" to={"/"}>
        Go to Store
      </Link>
    </div>
  );
}
