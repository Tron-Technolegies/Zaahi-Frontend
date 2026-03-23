import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRemoveAddress } from "../../hooks/address/useAddress";

export default function DeletePopup({ open, handleClose, id }) {
  const { isPending, mutateAsync } = useRemoveAddress();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Address"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you Sure Want to delete this address?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async () => {
            await mutateAsync(id);
            handleClose();
          }}
          disabled={isPending}
        >
          {isPending ? "...." : "Yes"}
        </Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
