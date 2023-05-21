import React from 'react';
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => (
  <section className='flex flex-wrap flex-col md:flex-row sm:py-24 py-6 gap-6' id='features'>

    <div className='flex flex-col flex-1 gap-6 items-start justify-center'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-white'>Find a better card deal <br className='hidden sm:block' />  in few easy steps.</h2>
      <p className='font-poppins text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button />
    </div>

    <div className='flex flex-col flex-1 gap-4'>
      <img src={ card } alt="card" className='w-[100%] h-[100%] object-contain' />
    </div>

  </section>
)

export default CardDeal
