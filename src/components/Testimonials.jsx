import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';


const Testimonials = () => (
  <section className='flex flex-wrap flex-col sm:py-24 py-6 gap-6 relative' id='clients'>
    <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
    
    <div className='flex flex-col sm:flex-row flex-1 w-full gap-6 items-center justify-center relative z-10'>
      <h2 className='flex-1 font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-white'>What people are <br className='hidden sm:block' /> saying about us</h2>
      <div className='flex-1'>
        <p className='font-poppins text-dimWhite text-[18px] leading-[30.8px] max-w-[450px]:'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className='flex sm:flex-row flex-wrap justify-center sm:justify-start content-start relative z-10'>
      {
        feedback.map(( card ) => (
          <FeedbackCard key={ card.id } { ...card } />
        ))
      }
    </div>

  </section>
)

export default Testimonials
