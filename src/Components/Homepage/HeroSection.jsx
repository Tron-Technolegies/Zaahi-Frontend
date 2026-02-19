import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='min-h-screen relative flex items-center'
      style={{
        background: 'linear-gradient(to right, #C4C4C400, #FFFFFF)',
      }}
    >
      <div className='max-w-5xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 text-center md:text-left mx-auto -mt-40'>
          <h1 className='font-[Bastoni] text-[#5D3838] text-xl md:text-[50px] tracking-wider leading-tight'>
            Elegance Woven
          </h1>

          <h1 className='font-[Bastoni] text-[#D47784] text-xl md:text-[50px] tracking-wider leading-tight'>
            in Tradition
          </h1>

          <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <button className='bg-transparent border border-[#D47784] text-[#D47784] px-6 py-3  font-medium hover:bg-[#D47784] hover:text-white transition duration-300'>
              Explore Collection
            </button>

            <button className='border border-[#D47784] text-[#D47784] px-6 py-3  font-medium hover:bg-[#D47784] hover:text-white transition duration-300'>
              Shop Now
            </button>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
          <img
            src='/Hero/heroneww.png'
            alt='Hero'
            className='w-[400px] md:w-[550px] object-contain'
          />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[300px] bg-linear-to-t from-30% from-[#ffff] to-transparent'></div>
    </section>
  );
}
