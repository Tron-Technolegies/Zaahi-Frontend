import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: 500,
  overflowY: "scroll",
  p: 4,
};

export default function SingleOrderDetails({ open, handleClose, order }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Order Details
        </Typography>
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
                <p>Size: {item.variant.size}</p>
              </div>
            </div>
          ))}
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
      </Box>
    </Modal>
  );
}
