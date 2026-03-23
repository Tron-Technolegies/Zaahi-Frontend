import React from "react";
import { useGetAddresses } from "../../hooks/address/useAddress";
import Loading from "../Loading";

export default function AddressInfo({ setDefault }) {
  const { isError, isLoading, data, error } = useGetAddresses();
  return (
    <div className="flex flex-col gap-2 max-h-80 overflow-y-scroll">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        data.addresses.map((address) => (
          <div className="p-5 border border-[#E8E8E8] flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-medium">{address.name}</p>
              <p className="font-light">
                {address.street}, {address.state} <br /> {address.country},{" "}
                {address.pin} <br />
                {address.phone}
              </p>
            </div>
            <button
              onClick={() => setDefault(address)}
              className="text-sm w-fit py-1 px-3 bg-gray-200"
            >
              select
            </button>
          </div>
        ))
      )}
    </div>
  );
}
