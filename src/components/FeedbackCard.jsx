import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex flex-col flex-1 gap-6 ss:w-[370px] w-full px-10 py-12 rounded-[20px] justify-between feedback-card' >

    <div className='flex flex-col gap-6'>
      <div className='w-[42px] h-[27px] object-contain'>
        <img src={ quotes } alt="qoute" />
      </div>

      <p className='font-poppins text-white text-[18px] leading-[32px] font-normal'>{ content }</p>
    </div>

    <div className='flex gap-6 items-center'>

      <div className='w-[48px] h-[48px] object-contain rounded-full'>
        <img src={ img } alt="people" />
      </div>

      <div className='flex flex-col'>
        <h4 className='font-poppins text-white text-[20px] leading-[32px] font-semibold'>{ name }</h4>
        <p className='font-poppins text-dimWhite text-[16px] leading-[24px] font-normal'>{ title }</p>
      </div>

    </div>
  </div>
)

export default FeedbackCard
