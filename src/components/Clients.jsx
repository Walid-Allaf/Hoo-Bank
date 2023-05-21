import React from 'react';
import { clients } from '../constants';

const Clients = () => (
  <section className='flex flex-col sm:py-24 py-6 gap-6'>
    <div className='flex flex-wrap w-full justify-between items-center'>
      {
        clients.map(( client ) => (
          <div key={ client.id } className='flex justify-center items-center flex-1 min-w-[120px] sm:min-w-[192px] my-4'>
            <img src={ client.logo } alt="clients" className='w-[100px] sm:w-[192px] object-contain' />
          </div>
        ))
      }
    </div>
  </section>
)

export default Clients
