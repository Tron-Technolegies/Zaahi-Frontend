import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

const OrderConfirmed = () => {
   const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <div className='md:w-2/3 w-11/12 p-5 shadow-md'>
          <p>Hii</p>
        </div>
      </Backdrop>
    </>
  );
};

export default OrderConfirmed;
