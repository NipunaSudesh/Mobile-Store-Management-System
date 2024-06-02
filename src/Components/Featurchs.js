import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
export const Featurchs = () => {
  return (
    <div>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <TbTruckDelivery className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Island-wide Next Day</h2>
                <h2>Delivery</h2>
            </div>
        </div>
    </div>
  )
}
