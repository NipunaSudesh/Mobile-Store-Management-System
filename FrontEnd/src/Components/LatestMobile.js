import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { ProductCard } from './ProductCard';
import axios from 'axios';

export const LatestMobile = () => {
  const [data,setData]=useState([]);

  const fetchData = async ()=>{
    try {
      const res =await axios.get('/product/get');
      setData(res.data);
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div id='LatestMobile' className='flex flex-col'>
        <div className='text-center'>
            <Header Title='LATEST MOBILE PHONES' />
        </div>

        <div className='grid grid-cols-1 sml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  mx-auto'>
          {data.map((product) =>(
            <ProductCard 
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.imgURL}
            details={product.details}
            type={product.type}
            />
          ))}

        </div>
    </div>
  )
}
