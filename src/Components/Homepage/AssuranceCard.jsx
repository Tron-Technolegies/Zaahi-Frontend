import React from 'react';

const AssuranceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className='flex flex-col  p-2 text-center'>
      <div className='w-8 h-12 mx-auto flex items-center justify-center rounded-full'>
        <Icon size={20} />
      </div>

      <h3 className='mt-3 text-md font-[Bayon]'>{title}</h3>

      <p className='mt-1 text-[#7C7C7C] text-sm leading-relaxed font-inter'>
        {description}
      </p>
    </div>
  );
};

export default AssuranceCard;
