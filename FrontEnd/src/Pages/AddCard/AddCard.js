import React from 'react';
import {TNavBar} from '../../Components/navbar/TNavBar';
import {Cart} from './Cart';

export const AddCard = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
          <TNavBar />
      </div>
      <div className='flex gap-4 mx-10 w-[90%]'>
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

        <div className='w-2/5 flex flex-col gap-2  '>
          <div className='m-4 bg-gray-300 flex flex-col justify-center my-auto mx-auto w-[90%] rounded-lg shadow-xl p-4'>
          <h1 className='text-xl font-semibold'>Summary</h1>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <h2>Sub Total</h2>
              <h2>LKR.12000</h2>
            </div>
            <div className='flex justify-between'>
              <h2>Shipping Fee</h2>
              <h2>LKR.120</h2>
            </div>
            <div className='flex justify-between'>
              <h2>Total</h2>
              <h2>LKR.12120</h2>
            </div>
            <div className='flex '>
            <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            
          >
            Buy
          </button>
            </div>
            
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
