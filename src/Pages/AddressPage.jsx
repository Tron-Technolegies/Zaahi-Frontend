import React, { useState } from "react";
import { useGetAddresses } from "../hooks/address/useAddress";
import Loading from "../Components/Loading";
import AddressCard from "../Components/Address/AddressCard";
import AddAddressForm from "../Components/Address/AddAddressForm";

export default function AddressPage() {
  const { isError, isLoading, data, error } = useGetAddresses();
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="flex flex-col">
      <h3 className="text-xl my-5">My Addresses</h3>
      <button
        onClick={() => setOpenForm(true)}
        className="p-2 bg-[#D47784] text-white text-sm w-fit self-end"
      >
        Add New
      </button>
      <div>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          data.addresses.map((item) => (
            <AddressCard key={item._id} address={item} />
          ))
        )}
      </div>
      <AddAddressForm open={openForm} handleClose={() => setOpenForm(false)} />
    </div>
  );
}
