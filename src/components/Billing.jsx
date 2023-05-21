import React from 'react';
import { apple, google, bill } from '../assets';


const Billing = () => (
  <section className='flex md:flex-row flex-col-reverse gap-4 sm:py-16 py-6' id='product'>
    <div className='flex flex-1 '>
      <img src={ bill } alt="bill" className='w-[100%] h-[100%] relative z-50 object-contain' />

      <div className='absolute z-0 w-[50%] h-[50%] -left-[50%] rounded-full white__gradient' />
      <div className='absolute z-0 -left-[50%] w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className='flex flex-col flex-1 gap-6 items-start justify-center'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-white'>Easily control your <br className='hidden sm:block' /> billing & invoicing.</h2>
      <p className='font-poppins text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex gap-5'>
        <img src={ apple } alt="apple" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        <img src={ google } alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)


export default Billing
