import React, { useEffect, useState } from 'react'
import {NavBar} from '../Components/navbar/NavBar';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer ';
import axios from 'axios';
import { ProductCard } from '../Components/ProductCard';

export const FeaturedMobile = () => {
const [data,setData]=useState([]);

const fetchData =async()=>{
  try {
    const res =await axios.get('http://localhost:5000/feature-mobile/get');
    setData(res.data);
    console.log("featured mobile data",res.data)
  } catch (error) {
    console.error(error);
    console.log("error in fetching featured mobile data")
  }
};
useEffect(()=>{
  fetchData();
},[]);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <NavBar />
      </div>
            <div className='text-center'>
              <Header Title="Featured Mobile" />
            </div>
            <div className='grid sml:grid-col-2 xs:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto'>
              {
                data.map((product)=>(
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
            <Footer />
      </div>
  )
}
