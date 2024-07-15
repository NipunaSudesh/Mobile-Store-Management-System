import React from 'react';
import {TNavBar} from '../../Components/navbar/TNavBar';
import {Cart} from './Cart';

export const AddCard = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
          <TNavBar />
      </div>
      <div className='flex gap-4 w-full mx-10'>
        <div className='w-3/5 flex flex-col gap-2  '>
        <h1 className='text-xl font-semibold'>Shopping Cart</h1>
        <div className='mx-2'>
        <h2 className='text-sm font font-semibold'>Shopping by Smart Mobile</h2>
      </div>
        <div className='flex flex-col gap-2'>
          <Cart />
          <Cart />
          <Cart />
        </div>
        </div>

        <div className='w-2/5 flex flex-col gap-2  bg-slate-200'>
        <h1 className='text-xl font-semibold'>Summary</h1>
        </div>
      </div>
    </div>
  )
}
