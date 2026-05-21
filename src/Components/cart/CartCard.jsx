import React, { useContext } from "react";
import { useRemoveFromCart, useUpdateCart } from "../../hooks/cart/useCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { UserContext } from "../../UserContext";

const CartCard = ({ item }) => {
  // const cartItemId = item?._id;
  // const product = item?.product;
  // const quantity = item?.qty;
  const { currency, exchange, currentUser } = useContext(UserContext);

  const { isPending: isRemoving, mutateAsync: removeAsync } =
    useRemoveFromCart();
  const { isPending: isUpdating, mutateAsync: updateAsync } = useUpdateCart();

  const handleIncrease = async () => {
    if (!currentUser) {
      const localStorageItems = JSON.parse(localStorage.getItem("zaahi-cart"));
      if (item.qty <= item.variant?.size?.stock) {
        const localItem = localStorageItems.find(
          (i) =>
            i.product?._id === item?.product?._id &&
            i.variant?.size?.size === item?.variant?.size?.size,
        );
        localItem.qty += 1;
        localStorage.setItem("zaahi-cart", JSON.stringify(localStorageItems));
        window.location.reload();
        return;
      }
    }
    if (item.qty < item.stock) {
      await updateAsync({ itemId: item._id, qty: item.qty + 1 });
    }
  };

  const handleDecrease = async () => {
    if (!currentUser) {
      const localStorageItems = JSON.parse(localStorage.getItem("zaahi-cart"));
      if (item.qty > 1) {
        const localItem = localStorageItems.find(
          (i) =>
            i.product?._id === item?.product?._id &&
            i.variant?.size?.size === item?.variant?.size?.size,
        );
        localItem.qty -= 1;
        localStorage.setItem("zaahi-cart", JSON.stringify(localStorageItems));
        window.location.reload();
        return;
      } else {
        const newItems = localStorageItems.filter(
          (i) =>
            !(
              i.product?._id === item?.product?._id &&
              i.variant?.size?.size === item?.variant?.size?.size
            ),
        );
        localStorage.setItem("zaahi-cart", JSON.stringify(newItems));
        window.location.reload();
        return;
      }
    }
    if (item.qty > 1) {
      await updateAsync({ itemId: item._id, qty: item.qty - 1 });
    } else {
      await handleRemove();
    }
  };

  const handleRemove = async () => {
    if (!currentUser) {
      const localStorageItems = JSON.parse(localStorage.getItem("zaahi-cart"));
      const newItems = localStorageItems.filter(
        (i) =>
          !(
            i.product?._id === item?.product?._id &&
            i.variant?.size?.size === item?.variant?.size?.size
          ),
      );
      localStorage.setItem("zaahi-cart", JSON.stringify(newItems));
      window.location.reload();
      return;
    }
    try {
      if (item._id) {
        await removeAsync(item._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row font-[Inter] tracking-wide w-full items-start md:items-center justify-between py-5 px-6 border border-[#E8E8E8] rounded-2xl gap-4 ${isRemoving || isUpdating ? "opacity-50" : ""}`}
      >
        <div className="flex items-center gap-4 w-full md:w-auto md:flex-1 min-w-0">
          <img
            src={item?.image || item?.product?.image?.url}
            className="h-24 w-20 object-cover rounded-md shrink-0"
            alt={item?.productName || "Product"}
          />
          <div className="flex flex-col flex-1 min-w-0">
            {/* <p className="font-medium text-xs text-[#777777] mb-1">
              Order ID: ABC-
              {cartItemId ? cartItemId.substring(18).toUpperCase() : ""}
            </p> */}
            <p className="text-base text-[#181817] truncate font-medium">
              {item?.productName || item?.product?.productName}
            </p>
            <p className="font-medium mt-1">
              {currency === "INR"
                ? `Rs ${item?.price || item?.variant?.size?.price}`
                : currency === "AED" && exchange
                  ? `AED ${((item?.price || item?.variant?.size?.price) * exchange?.INRtoAED).toFixed(2)} `
                  : `Rs ${item?.price || item?.variant?.size?.price}`}
            </p>
            <p className="text-sm text-gray-400 font-medium">
              Size: {item?.size || item?.variant?.size?.size}
            </p>
            <div className="flex items-center w-fit border border-[#7B7B7B66] mt-2">
              <button
                onClick={handleDecrease}
                className="px-3 py-1"
                disabled={isUpdating || isRemoving}
              >
                <AiOutlineMinus />
              </button>
              <span className="px-4">{item?.qty}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1"
                disabled={
                  item?.qty >= item?.stock ||
                  isUpdating ||
                  isRemoving ||
                  item?.qty >= item?.variant?.size?.stock
                }
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-20 w-full md:w-auto mt-4 md:mt-0 justify-end">
          <p className="font-semibold text-lg hidden md:block">
            {currency === "INR"
              ? ` Rs ${(item?.price || item?.variant?.size?.price) * item?.qty}`
              : currency === "AED" && exchange
                ? `AED ${((item?.price || item?.variant?.size?.price) * item?.qty * exchange?.INRtoAED).toFixed(2)}`
                : ` Rs ${(item?.price || item?.variant?.size?.price) * item?.qty}`}
          </p>
          <button
            onClick={handleRemove}
            className="cursor-pointer text-xl text-[#777777] hover:text-red-500 transition"
            disabled={isRemoving}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
