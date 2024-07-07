import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const MobileTable = () => {
const [mobile,setMobile] =useState([]);
const [Fmobile,setFMobile] =useState([]);

useEffect(()=>{
  FetchLatesMobile();
  fetchFeatureMobile ();
},[]);

const FetchLatesMobile  = async ()=>{
  try {
    const res =await axios.get('http://localhost:5000/product/get');
    setMobile(res.data);
    console.log(res.data);
  } catch (error) {
    console.error("Error loading mobile:", error);
  }
};
const fetchFeatureMobile   = async ()=>{
  try {
    const res =await axios.get('http://localhost:5000/feature-mobile/get');
    setFMobile(res.data);
  } catch (error) {
    console.error("Error loading mobile:", error);
  }
};

const handleDelete = async (id)=>{
  try {
    await axios.delete(`http://localhost:5000/product/delete/${id}`);
    FetchLatesMobile();
  } catch (error) {
    console.error('Error deleting mobile:', error);
  }
}
const handleFeatureDelete = async (id)=>{
  try {
    await axios.delete(`http://localhost:5000/feature-mobile/delete/${id}`);
    fetchFeatureMobile();
  } catch (error) {
    console.error('Error deleting mobile:', error);
  }
}



  return (
    <div className='flex items-center justify-center'>
      <table className='shadow-lg border w-full mt-4'>
        <thead >
          <tr className='sticky top-20 z-40'>
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
              <td>RS.{phone.price}</td>
              <td>{phone.quantity}</td>
              <td>
                <div className='grid grid-flow-row gap-1'>
                {mobile.find(item => item._id === phone._id) ? (
                <Link to={`/editlatest/${phone._id}`} className='bg-blue-500 text-white p-1 rounded text-center'>Edit</Link>
              ):(
                <Link to={`/editfeature/${phone._id}`} className='bg-blue-500 text-white p-1 rounded text-center'>Edit</Link>
                )}
                {mobile.find(item => item._id === phone._id) ? (
                    <button className='bg-red-500 text-white p-1 rounded' onClick={() => handleDelete(phone._id)}>Delete</button>
                  ) : (
                    <button className='bg-red-500 text-white p-1 rounded' onClick={() => handleFeatureDelete(phone._id)}>Delete</button>
                  )}
                </div>

              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}
