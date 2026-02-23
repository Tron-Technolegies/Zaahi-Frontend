import React from 'react';

const Membership = () => {
  return (
    <div className='flex flex-col gap-2 items-center mb-8'>
      <p className='font-sans text-red-500 text-center text-[12px]'>
        EXCLUSIVE MEMBERSHIP
      </p>
      <p className='font-[Bastoni] text-4xl'>Join the Circle of</p>
      <p className='font-[Bastoni] text-4xl'> Distinguished Collectors</p>
      <p className='font-sans text-sm text-[#848484]'>
        Gain access to private viewings, first looks at rare acquisitions, and
      </p>
      <p className='font-sans text-sm text-[#848484]'>
        exclusive events in the world's finest venues.
      </p>

      <button className='border border-[#D47784] text-[#D47784] px-6 py-2  font-medium hover:bg-[#D47784] hover:text-white transition duration-300'>
        REQUEST MEMBERSHIP
      </button>
    </div>
  );
};

export default Membership;
