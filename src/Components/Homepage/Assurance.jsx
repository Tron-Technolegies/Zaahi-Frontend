import React from 'react';
import { IoShieldOutline } from 'react-icons/io5';
import { RiLoopLeftFill } from 'react-icons/ri';
import { PiMedal } from 'react-icons/pi';
import { FiTruck } from 'react-icons/fi';
import AssuranceCard from './AssuranceCard';

const AssuranceSection = () => {
  return (
    <section className='w-full py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Cards */}
        <div className='grid gap-3 md:grid-cols-4'>
          <AssuranceCard
            icon={IoShieldOutline}
            title='Authenticity Guaranteed'
            description='Every piece verified by our experts'
          />
          <AssuranceCard
            icon={FiTruck}
            title='White Glove Delivery'
            description='Complimentary worldwide shipping'
          />

          <AssuranceCard
            icon={RiLoopLeftFill}
            title='30-Day Returns'
            description='No questions asked returns'
          />
          <AssuranceCard
            icon={PiMedal}
            title='Warranty'
            description='Coverage on all timepieces'
          />
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
