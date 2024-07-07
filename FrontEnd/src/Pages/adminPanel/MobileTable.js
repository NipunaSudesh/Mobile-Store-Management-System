import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const MobileTable = () => {
const [mobile,setMobile] =useState([]);
const [Fmobile,setFMobile] =useState([]);

useEffect(()=>{
  FetchLatesMobile();
  FeachMobile();
},[]);

const FetchLatesMobile  = async()=>{
  try {
    const res =await axios.get('http://localhost:5000/product/get');
    setMobile(res.data);
    console.log(res.data);
  } catch (error) {
    console.error("Error loading mobile:", error);
  }
};
const FeachMobile  = async()=>{
  try {
    const res =await axios.get('http://localhost:5000/feature-mobile/get');
    setFMobile(res.data);
  } catch (error) {
    console.error("Error loading mobile:", error);
  }
};


  return (
    <div className='flex items-center justify-center'>
      <table className='shadow-lg border w-full mt-4'>
        <thead >
          <tr>
            <th scope='col' className='bg-green-600 text-white p-2'>#</th>
            <th scope='col' className='bg-green-600 text-white p-2'>image</th>
            <th scope='col' className='bg-green-600 text-white p-2'>Mobile Name</th>
            <th scope='col' className='bg-green-600 text-white p-2'>Price</th>
            <th scope='col' className='bg-green-600 text-white p-2'>Quantity</th>
            <th scope='col' className='bg-green-600 text-white p-2'>Action</th>

          </tr>
        </thead>
        <tbody>
        {[...mobile,...Fmobile].map((phone, index) => (
            <tr key={index}
            className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
            >
              <th scope='row'>{index + 1}</th>
              <td><img src={phone.imgURL} alt='imgURL' className='w-16 h-16 object-cover'></img></td>
              <td>{phone.name}</td>
              <td>{phone.price}</td>
              <td>{phone.quantity}</td>
              <td>
                <div className='grid grid-flow-row gap-1'>
                <button className='bg-blue-500 text-white gap-2 p-1 rounded'>Edit</button>
                <button className='bg-red-500 text-white p-1 rounded'>Delete</button>
                </div>

              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}
