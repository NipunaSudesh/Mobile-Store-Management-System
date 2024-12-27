import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export const DashBoard = () => {
const [userCount,setUserCount] =useState(0);
const [latestCount,setLatestCount] =useState(0);
const [featureCount,setFeatureCount] =useState(0);
const [orderCount,setOrderCount] =useState(0);

useEffect(()=>{
  fetchUsersCount();
  fetchLatestsCount();
  fetchFeaturesCount();
  fetchOrdersCount();

},[]);

const fetchUsersCount = async ()=>{
  try {
    const res =await axios.get('/user/count');
    setUserCount(res.data.count);
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
}
const fetchLatestsCount = async ()=>{
  try {
    const res =await axios.get('/product/count');
    setLatestCount(res.data.count);
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
}
const fetchFeaturesCount = async ()=>{
  try {
    const res =await axios.get('/feature-mobile/count');
    setFeatureCount(res.data.count);
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
}
const fetchOrdersCount = async ()=>{
  try {
    const res =await axios.get('/order/count');
    setOrderCount(res.data.count);
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
}


  return (
    <div className='flex items-center justify-center'>
        <div className='grid sml:grid-cols-2 lgl:grid-cols-4  gap-5 items-center justify-center text-center mt-10'>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <FaUser className='w-8 h-8 ' />
            <h1 className='text-gray-800 text-xl'>User</h1>
            <h2 className='text-blue-500 text-2xl'>{userCount}</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdOutlineMobileFriendly className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Latest Mobile </h1>
            <h2 className='text-blue-500 text-2xl'>{latestCount}</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdOutlineMobileFriendly className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Feature Mobile </h1>
            <h2 className='text-blue-500 text-2xl'>{featureCount}</h2>
          </div>
          <div className='bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-white gap-2 flex-col'>
            <MdEmail className='w-8 h-8' />
            <h1 className='text-gray-800 text-xl'>Orders</h1>
            <h2 className='text-blue-500 text-2xl'>{orderCount}</h2>
          </div>
          </div>

    </div>
  )
}

