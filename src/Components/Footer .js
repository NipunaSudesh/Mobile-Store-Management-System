import React from 'react'
import { FaRegCopyright ,FaHeart } from "react-icons/fa";


export const Footer  = () => {
  return (
    <div className='flex bg-bodyColor w-full h-10 items-center justify-center'>
        <FaRegCopyright className='mx-2'/>
        <p>2024 <span className='text-red-700'>Smart Mobile</span> (Pvt) Ltd. All Rights Reserved.</p>
        <FaHeart className='text-red-700'/>
    </div>
  )
}
