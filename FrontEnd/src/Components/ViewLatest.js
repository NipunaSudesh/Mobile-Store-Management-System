import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TNavBar } from './navbar/TNavBar';
import { RelatedMobile } from './RelatedMobile';

export const ViewLatest = () => {
  const [mobile, setMobile] = useState({
    name: '',
    price: '',
    quantity: '',
    year: '',
    type:'',
    imgURL: '',
    brand: '',
    details:'',
    description: ''
});

  const { id } = useParams();

  //const type = Cookies.get('type');
console.log('id :'.id);


useEffect(() => {
  const fetchMobile = async () => {
    try {
      const res = await axios.get(`/product/get/${id}`);
      setMobile(res.data);
      console.log('Feature Mobile Data:', res.data);
    //  const discountedWithOutPrice ={res.data.price}*1.1;
    } catch (error) {
      console.error('Failed to fetch mobile', error);
    }
  };

  fetchMobile();
}, [id]);





  return (
    <div>
      <TNavBar />
    <div className=' w-full flex my-10'>
      <div className=' w-[90%] sml:w-[90%] lgl:w-[80%] h-[70%] flex  gap-2 '>
        <div className= ' w-2/5 items-center justify-center flex group'>
          
            <img src={mobile.imgURL} className=' pr-5 rounded-lg object-cover transition-transform duration-500 group-hover:scale-110' alt='src'></img>
          
        </div>
        <div className= 'w-3/5  p-2 flex flex-col gap-4  justify-center'>
        <div className='w-full flex flex-col gap-4 text-start '>
        <h1 className='text-center text-2xl font-serif font-bold'>{mobile.name}</h1>
        
        <div className='flex flex-col gap-1'>
        <h2 className=' text-xl font-semibold'>LKR  <span className=' '> {mobile.price}</span> </h2>
        <div className='flex gap-4'>
        <h2 className='text-gray-500 line-through'>LKR {mobile.price*1.1}</h2>
        <h2 className='text-red-500'> 10% off</h2>
        </div>

        </div>
        <p className='text-base'>{mobile.description}</p>
        <h2 className='font-semibold uppercase'>CATEGORIES : BRAND PHONES ,{mobile.brand}</h2>
        <h2 className='uppercase font-semibold'>details : {mobile.details}</h2>
        </div>
        <div className='items-center justify-center flex mt-5'>
        <Link
      type="button" 
      className="text-white bg-blue-500 w- hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
      name="addCard"
    >
      Add To Cart
    </Link>
        </div>
        
        </div>

      </div>
    </div>
    <div>
      <RelatedMobile brand={mobile.brand}/>
    </div>
    </div>
  )
}
