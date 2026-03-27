import React, { useState } from "react";
import EditAddressForm from "./EditAddressForm";
import { useMakeDefault } from "../../hooks/address/useAddress";
import DeletePopup from "./DeletePopup";

export default function AddressCard({ address }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { isPending, mutateAsync } = useMakeDefault();
  return (
    <>
      <div className="p-5 border border-[#E8E8E8] flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          {address?.isDefault && (
            <p className="text-xs self-end p-1 px-4 rounded-full bg-gray-200">
              Default
            </p>
          )}
          <p className="font-medium">{address.name}</p>
          <p className="font-light">
            {address.street}, {address.state} <br /> {address.country},{" "}
            {address.pin} <br />
            {address.phone}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <div className="flex gap-2 items-center md:w-fit w-full">
            <button
              className="p-1 px-4 bg-gray-200"
              onClick={() => setOpenEdit(true)}
            >
              Edit
            </button>
            <button
              className="p-1 px-4 bg-red-200"
              onClick={() => setOpenDelete(true)}
            >
              Delete
            </button>
          </div>
          {!address.isDefault && (
            <button
              disabled={isPending}
              onClick={() => mutateAsync(address?._id)}
              className="p-1 px-4 bg-[#D47784] text-white md:w-fit w-full"
            >
              {isPending ? "...." : "Make Default"}
            </button>
          )}
        </div>
      </div>
      <EditAddressForm
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        address={address}
      />
      <DeletePopup
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        id={address?._id}
      />
    </>
  );
}
