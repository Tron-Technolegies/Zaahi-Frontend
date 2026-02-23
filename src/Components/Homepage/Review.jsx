import React from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { IoIosStar } from 'react-icons/io';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Review = () => {
  function PaginationOutlined() {
    return (
      <div className='flex gap-3 mt-6'>
        <span className='w-2 h-2 rounded-full bg-black'></span>
        <span className='w-2 h-2 rounded-full bg-gray-400'></span>
        <span className='w-2 h-2 rounded-full bg-gray-400'></span>
        <span className='w-2 h-2 rounded-full bg-gray-400'></span>
      </div>
    );
  }

  return (
    <div className='p-30 bg-[#F1F1F1] mb-6 flex flex-col items-center justify-center'>
      <div>
        <RiDoubleQuotesR className='text-6xl text-[#DF99A3]' />
      </div>
      <p className='font-abhaya font-semibold text-2xl text-center mt-6'>
        "The Banarasi saree I ordered was absolutely stunning. The craftsmanship
        is unmatched and it arrived beautifully packaged."
      </p>
      <div className='mt-6'>
        <IoIosStar className=' text-yellow-400' />
      </div>
      <p className='text-md'>Alexander Rothschild</p>
      <p className='text-[#848484] text-sm'>Private Collector, Geneva</p>
      <div>{PaginationOutlined()}</div>
    </div>
  );
};

export default Review;
