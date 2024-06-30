import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { ProductCard } from './ProductCard';
import axios from 'axios';

export const LatestMobile = () => {
  const [data,setData]=useState([]);

  const fetchData = async ()=>{
    try {
      const res =await axios.get('http://localhost:5000/product/get');
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
    <div className='flex flex-col'>
        <div className='text-center'>
            <Header Title='LATEST MOBILE PHONES' />
        </div>

        <div className='grid md:grid-cols-3 mdl:grip-cols-2 lgl:grid-cols-5 gap-x-4 '>
          {data.map((product) =>(
            <ProductCard 
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.imgURL}
            deltails={product.details}
            />
          ))}

        </div>
    </div>
  )
}
