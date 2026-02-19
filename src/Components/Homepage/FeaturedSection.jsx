import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedSection = () => {
  return (
    <section className='w-full flex justify-center py-16'>
      <div className='w-full max-w-7xl px-6 lg:px-12'>
        <div className='flex justify-between items-start mb-12'>
          <div className='max-w-xl'>
            <p className='text-[14px] text-[#181817] font-sans'>
              CURATED SELECTION
            </p>

            <h2 className='font-[Bastoni] text-4xl mt-2'>Featured Pieces</h2>

            <p className='text-[15px] text-[#848484] font-sans mt-3'>
              Handcrafted ethnic wear that celebrates the art of Indian
              textiles. Each piece tells a story of tradition and craftsmanship.
            </p>
          </div>

          <button className='mt-6 cursor-pointer'>View All →</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
