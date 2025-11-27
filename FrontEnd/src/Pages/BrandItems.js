import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../Components/ProductCard';
import { Header } from '../Components/Header';
import {NavBar} from '../Components/navbar/NavBar';

export const BrandItems = () => {
  const [latestMobile, setLatestMobile] = useState([]);
  const [featureMobile, setFeatureMobile] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    fetchLatestBrandData();
    fetchFeatureBrandData();
  }, [brand]);

  const fetchLatestBrandData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/product/get/brand/${brand}`);
      setLatestMobile(res.data);
      console.log('latest mobile');
      console.log(res.data);
    } catch (error) {
      console.log('Failed to fetch brand data', error);
    }
  };

  const fetchFeatureBrandData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/feature-mobile/get/brand/${brand}`);
      setFeatureMobile(res.data);
      console.log('feature mobile');
      console.log(res.data);
    } catch (error) {
      console.log('Failed to fetch brand data', error);
    }
  };

  return (
    <div className='flex flex-col'>
            <div>
              <NavBar />
            </div>
      <div className='mt-10 mb-5 w-full border-b-2 border-gray-500 items-center justify-center flex'>
        <h2 className='text-4xl font-semibold uppercase'>{brand} Mobile</h2>
      </div>
    {/* <div className='mt-10 mb-5 w-full border-b-2 border-gray-500'> */}
      {/* <div className='bg-green-500 flex h-[60px] items-center justify-center'>
        <h2 className='text-2xl text-white uppercase'>{brand} Mobile</h2>
      </div>
    <div className='mt-10 mb-5 w-full border-b-2 border-gray-500'> */}

      <div className='grid grid-cols-1 sml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  mx-auto'>
        {
          [...latestMobile, ...featureMobile].map((mobile) => (
            <ProductCard
              key={mobile._id}
              id={mobile._id}
              name={mobile.name}
              price={mobile.price}
              image={mobile.imgURL}
              details={mobile.details}
              type={mobile.type}
            />
          ))
        }
      </div>
    </div>
  );
};
