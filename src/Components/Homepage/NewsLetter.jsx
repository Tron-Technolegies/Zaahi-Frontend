import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';

const NewsLetter = () => {
  return (
    <div className='flex flex-col  p-25 gap-3 items-center justify-center '>
      <p className='text-sm'>STAY CONNECTED</p>
      <p className='font-[Bastoni] text-3xl'>Join Our Inner Circle</p>
      <p className='text-[#848484] text-[12px]'>
        Be the first to know about new acquisitions, private sales, and
        exclusive events.
      </p>
      <div className='flex gap-2'>
        <input
          placeholder='Enter your email address'
          className='py-2 px-6 bg-[#E9E9E9]'
        />
        <button className='border border-[#D47784] text-[#D47784] px-6 py-2  font-medium hover:bg-[#D47784] hover:text-white transition duration-300 flex items-center gap-2'>
          <CiLocationArrow1 size={20} /> SUBSCRIBE
        </button>
      </div>
      <p className='text-[#848484] text-[10px]'>
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};

export default NewsLetter;
