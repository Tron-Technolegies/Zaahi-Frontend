import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAddAddress } from "../../hooks/address/useAddress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  maxHeight: 500,
  overflowY: "scroll",
  boxShadow: 24,
  p: 4,
};

export default function AddAddressForm({ open, handleClose }) {
  const { isPending, mutateAsync } = useAddAddress();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="p"
          component="p"
          sx={{ color: "black", fontSize: 20 }}
        >
          Add New Address
        </Typography>
        <form
          className="flex flex-col gap-2 mt-5"
          onSubmit={async (e) => {
            e.preventDefault();
            const formdata = new FormData(e.target);
            const data = Object.fromEntries(formdata);
            await mutateAsync(data);
            handleClose();
          }}
        >
          <label className="text-xs">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <label className="text-xs">Address Line</label>
          <input
            type="text"
            placeholder="Street, Location, City"
            name="street"
            required
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <label className="text-xs">State</label>
          <input
            type="text"
            placeholder="Enter State"
            name="state"
            required
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <label className="text-xs">Country</label>
          <input
            type="text"
            placeholder="Enter Country"
            name="country"
            required
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <label className="text-xs">ZIP</label>
          <input
            type="text"
            name="pin"
            required
            placeholder="Enter Postal Code"
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <label className="text-xs">Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            required
            className="p-2 border border-[#E8E8E8] outline-none"
          />
          <button
            disabled={isPending}
            className="p-2 bg-[#D47784] text-white mt-2"
          >
            {isPending ? "Adding.." : "Add"}
          </button>
        </form>
      </Box>
    </Modal>
  );
}
