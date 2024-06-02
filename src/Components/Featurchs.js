import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { MdVerifiedUser } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
export const Featurchs = () => {
  return (
    <div className='flex'>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <TbTruckDelivery className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Island-wide Next Day</h2>
                <h2>Delivery</h2>
            </div>
        </div>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <VscFeedback className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Fast Customer</h2>
                <h2>Feedbacks</h2>
            </div>
        </div>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <MdVerifiedUser className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Warranty Add-ons</h2>
                <h2>Available</h2>
            </div>
        </div>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <FaClipboardCheck className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Genuine Devices</h2>
                <h2>with Warranty</h2>
            </div>
        </div>
        <div className='flex gap-2 p-4 border-2 rounded '>
            <div className='text-blue-500'>
                <GiReceiveMoney className='w-10 h-10'/>
            </div>
            <div  className='text-center'>
                <h2 className='font-semibold'>Leading Credit Cards</h2>
                <h2>& Cash on Delivery</h2>
            </div>
        </div>
    </div>
  )
}
