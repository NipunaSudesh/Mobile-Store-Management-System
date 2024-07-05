import React, { useState } from 'react'

export const AdminPanel = () => {
const [activeLink,setActiveLink] =useState('dashboard')

  return (
    <div className='w-full flex flex-col'>
      <div className='w bg-gray-300 flex flex-col'>
        <div className='bg-green-700 text-white h-[50px] items-center  text-center justify-center'>
            <h2>hello admin nipuna</h2>
        </div>
        <div className='bg-gray-200 py-1 nav-links items-center justify-center mx-auto shadow-md sticky top-0 z-40'>
          <ul className='flex justify-center gap-2 mdl:gap-3 lgl:gap-10 sm:flex-nowrap'>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'dashboard' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#dashboard"
            onClick={() => setActiveLink('dashboard')}
          >
            Dashboard
          </a>
        </li>
          <li className='p-1 hover:bg-green-200 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'User' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#User"
            onClick={() => setActiveLink('User')}
          >
            User
          </a>
        </li>
          <li className='p-1 hover:bg-green-200 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'LatestMobile' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#LatestMobile"
            onClick={() => setActiveLink('LatestMobile')}
          >
            Add LatestMobile
          </a>
        </li>
          <li className='p-1 hover:bg-green-200 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'FeaturedMobile' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#FeaturedMobile"
            onClick={() => setActiveLink('FeaturedMobile')}
          >
            Add FeaturedMobile
          </a>
        </li>
          <li className='p-1 hover:bg-green-200 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Orders' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#Orders"
            onClick={() => setActiveLink('Orders')}
          >
            Orders
          </a>
        </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  )
}
