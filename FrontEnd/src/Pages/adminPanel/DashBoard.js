import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export const DashBoard = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='grid sml:grid-cols-2 lgl:grid-cols-4  gap-5 items-center justify-center text-center mt-10'>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <FaUser className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>User</h1>
            <h2 className='text-blue-500'>1233</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdOutlineMobileFriendly className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Latest Mobile </h1>
            <h2 className='text-blue-500'>1233</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdOutlineMobileFriendly className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Feature Mobile </h1>
            <h2 className='text-blue-500'>1233</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdEmail className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Orders</h1>
            <h2 className='text-blue-500'>1233</h2>
          </div>
          </div>

    </div>
  )
}

