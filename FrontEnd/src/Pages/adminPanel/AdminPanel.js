import React, { useEffect, useState } from 'react'
import { DashBoard } from './DashBoard'
import { UserTable } from './UserTable';
import { AddProduct } from './AddProduct';
import { AddMobile } from './AddMobile';
import { MobileTable } from './MobileTable';
import { useNavigate } from 'react-router-dom';

export const AdminPanel = () => {
const [activeLink,setActiveLink] =useState('dashboard');
const navigate = useNavigate();

const handleHome = ()=>{
  navigate('/')
}


  return (
    <div className='w-full flex flex-col'>
      <div className='sticky top-0 z-40 bg-gray-200 flex flex-col'>
        <div className='bg-green-700 text-white h-[50px] flex items-center justify-center'>
            <h2 className='text-xl'>Hello Admin Nipuna</h2>
        </div>
        <div className='bg-gray-200 py-1 nav-links items-center justify-center mx-auto shadow-md '>
          <ul className='flex justify-center gap-2 mdl:gap-3 lgl:gap-10 sm:flex-nowrap'>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'dashboard' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#dashboard"
            onClick={() => setActiveLink('dashboard')}
          >
            Dashboard
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'User' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#User"
            onClick={() => setActiveLink('User')}
          >
            User
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Mobile' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#Mobile"
            onClick={() => setActiveLink('Mobile')}
          >
            Mobile
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'LatestMobile' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#LatestMobile"
            onClick={() => setActiveLink('LatestMobile')}
          >
            LatestMobile
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'FeaturedMobile' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#FeaturedMobile"
            onClick={() => setActiveLink('FeaturedMobile')}
          >
            FeaturedMobile
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Orders' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#Orders"
            onClick={() => setActiveLink('Orders')}
          >
            Orders
          </a>
        </li>
          <li className='p-1 hover:bg-gray-400 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Home' ? 'text-red-700 underline' : 'text-blue-800'}`}
            href="#Orders"
            onClick={handleHome}
          >
            Home
          </a>
        </li>
          </ul>
        </div>
      </div>
      <div>
      <div id="dashboard" className={`p-4 ${activeLink === 'dashboard' ? 'block' : 'hidden'}`}>

       <DashBoard />
      </div>
      <div id="User" className={`p-4 ${activeLink === 'User' ? 'block' : 'hidden'}`}>

        <UserTable />
      </div>
      <div id="Mobile" className={`p-4 ${activeLink === 'Mobile' ? 'block' : 'hidden'}`}>

        <MobileTable />
      </div>
      <div id="LatestMobile" className={`p-4 ${activeLink === 'LatestMobile' ? 'block' : 'hidden'}`}>

       <AddProduct />
      </div>
      <div id="FeaturedMobile" className={`p-4 ${activeLink === 'FeaturedMobile' ? 'block' : 'hidden'}`}>

        <AddMobile />
      </div>
      </div>
    </div>
  )
}
