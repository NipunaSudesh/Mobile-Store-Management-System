import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UserTable = () => {
const [user,setUser]=useState('');

useEffect(()=>{
  fatchUser();
},[]);

const fatchUser =async ()=>{
  try {
    const res = await axios.get('http://localhost:5000/user/users');
    setUser(res.data);
  } catch (error) {
    console.error("Error loading Users:", error);
  }
}


  return (
    <div className='flex items-center justify-center'>
      <table className='shadow-lg border w-[70%] mt-4'>
        <thead>
          <tr>
            <td scope='col' className='bg-green-500 text-white p-2 '>#</td>
            <td scope='col' className='bg-green-500 text-white p-2 '>Name</td>
            <td scope='col' className='bg-green-500 text-white p-2 '>Email</td>
            <td scope='col' className='bg-green-500 text-white p-2 '>Action</td>

          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
