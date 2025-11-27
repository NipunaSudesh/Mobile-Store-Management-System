import React, { useEffect, useState } from 'react'
import {NavBar} from '../Components/navbar/NavBar';
import {Header} from '../Components/Header';
import axios from 'axios';
import { ProductCard } from '../Components/ProductCard';
import {Footer} from '../Components/Footer ';

export const LatestMobile = () => {
  const [LatestMobile,setLatestMobile]=useState([]);

const fatchLatestMobile= async()=>{
  try{
    const res=await axios.get('http://localhost:5000/product/get');
    setLatestMobile(res.data);
    console.log("latest mobiles are ",res.data)
  }catch (error) {
      console.error(error)
    }
}
useEffect(()=>{
fatchLatestMobile();
},[]);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <NavBar />
      </div>
            <div className='text-center flex flex-col justify-center items-center'>
              <div>
                <Header Title="Latest Mobile" />
              </div>
              <div className='grid grid-col gap-4 sml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto '>

{
  LatestMobile.map((product)=>(
    <ProductCard 
    key={product._id}
    id={product._id}
    name={product.name}
    price={product.price}
    image={product.imgURL}
    details={product.details}
    type={product.type} 
    />
  ))
}

              </div>
            </div>
            <Footer />
      </div>
  )
}
