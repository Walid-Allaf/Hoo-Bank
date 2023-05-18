import React from 'react';
import { features } from '../constants';
import Button from './Button';

const Feature = ( { icon, title, content, index } ) => (
  <div className='flex flex-col xs:flex-row items-center justify-start gap-4 p-6 rounded-[20px] feature-card' >
    <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue'>
      <img src={ icon } alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className='flex flex-col items-center xs:items-start'>
      <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white'>{ title }</h4>
      <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center xs:text-left'>{ content }</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className='flex flex-wrap flex-col md:flex-row sm:py-24 py-6 gap-6' id='features'>
      <div className='flex flex-col flex-1 gap-6 items-start justify-center'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-white'>You do the business,<br className='hidden sm:block' /> we’ll handle the money.</h2>
        <p className='font-poppins text-dimWhite text-[18px] leading-[30.8px]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>
      <div className='flex flex-col flex-1 gap-4'>
        {
          features.map(( feature, index ) => (
            <Feature key={ feature.id } index={ index } {...feature} />
          ))
        }
      </div>
    </section>
  )
}


export default Business
