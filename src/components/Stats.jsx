import React from 'react';
import { stats } from '../constants';

const Stats = () => (
  <section className='flex items-center justify-between flex-col gap-4 lg:gap-0 ss:flex-row flex-wrap'>
    {
      stats.map((stat, index) => (
        
          <div className='text-white flex flex-1 flex-col xs:flex-row xs:gap-4 gap-0 items-center justify-start' key={ stat.id }>
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leadding-[53px] leading-[43px] text-white'>{ stat.value }</h4>
            <p className='text-gradient font-poppins uppercase font-normal xs:text-[20px] text-[15px] xs:leadding-[26px] leading-[21px]'>{ stat.title }</p>
            {/* {index !== (stats.length - 1) && 
              <div className={`w-[1px] h-[15px] bg-white hidden sm:block`} />
            } */}
          </div>
        
      ))
    }
  </section>
)

export default Stats
