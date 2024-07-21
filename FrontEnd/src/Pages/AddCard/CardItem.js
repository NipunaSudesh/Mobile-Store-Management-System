import React from 'react';

import { MdDeleteForever } from "react-icons/md";

export const CardItem = ({name,price,details,imgURL,quantity}) => {
  return (
    <div className='bg-gray-200 w-full flex  text-start shadow-lg rounded-lg'>
        <div className='flex gap-2 w-full '>
          <div className='w-1/5 bg-red-200 m-2'>
          <img className='object-cover' src={imgURL} alt='' />
          </div>
          <div className='m-2 flex flex-col w-3/5'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h2>{details}</h2>
            <h2 className='text-red-500'>LKR.{price}</h2>
          </div>
          
          <div className='h-9 w-9 object-cover m-2 bg-black bg-opacity-25 flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300'>
      <MdDeleteForever className='w-6 h-6 hover:text-black text-center text-gray-300 shadow-shadowOne' />
    </div>
        </div>
  
    </div>
  )
}
