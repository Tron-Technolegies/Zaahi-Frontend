import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const FeaturedCard = () => {
  return (
    <div className='group relative bg-white border border-gray-200 overflow-hidden'>
      <div className='absolute top-4 right-4 cursor-pointer z-10'>
        <FaRegHeart className='text-gray group-hover:text-[#D47784] transition' />
      </div>

      <div className='flex items-center justify-center h-96 bg-[#F9F9F9]'>
        <img
          src='/Featured/Kurti.png'
          alt='Product'
          className='object-contain h-[85%] transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className='py-4 text-center'>
        <p className='text-sm text-gray-700'>Kurti</p>
        <p className='mt-2 text-lg text-gray-900'>₹2,499</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
