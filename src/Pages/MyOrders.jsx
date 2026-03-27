import React, { useState } from "react";
import { useGetOrders } from "../hooks/order/useOrder";
import Loading from "../Components/Loading";
import OrderCard from "../Components/orders/OrderCard";

export default function MyOrders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("ALL");
  const { isLoading, isError, data, error } = useGetOrders({
    currentPage,
    status,
  });
  return (
    <div>
      <h3 className="text-xl my-5">My Orders</h3>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div>
          {data.orders.map((item) => (
            <OrderCard key={item._id} order={item} />
          ))}
        </div>
      )}
    </div>
  );
}
