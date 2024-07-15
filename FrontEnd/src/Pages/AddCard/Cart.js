import React from 'react';
import { apple13 } from '../../assets';
import { MdDeleteForever } from "react-icons/md";

export const Cart = () => {
  return (
    <div className='bg-gray-200 w-full flex  text-start shadow-lg rounded-lg'>
        <div className='flex gap-2 w-full '>
          <div className='w-1/5 bg-red-200 m-2'>
          <img className='object-cover' src={apple13} alt='' />
          </div>
          <div className='m-2 flex flex-col w-3/5'>
            <h1 className='text-xl font-semibold'>allple 12 pro max</h1>
            <h2>12ram 512 ram</h2>
            <h2 className='text-red-500'>LKR.12333</h2>
          </div>
          
          <div className='h-9 w-9 object-cover m-2 bg-black bg-opacity-25 flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300'>
      <MdDeleteForever className='w-6 h-6 hover:text-black text-center text-gray-300 shadow-shadowOne' />
    </div>
        </div>
  
    </div>
  )
}
