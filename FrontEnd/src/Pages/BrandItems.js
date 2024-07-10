import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BrandItems = () => {
  const [latestMobile, setLatestMobile] = useState({
    brand: '',
    logoURL: ''
  });
  const { brand } = useParams();

  console.log(brand);

  useEffect(() => {
    fetchLatestBrandData();
  }, [brand]);

  const fetchLatestBrandData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/feature-mobile/get/brand/${brand}`);
      setLatestMobile(res.data);
      console.log(res.data);
    } catch (error) {
      console.log('Failed to fetch brand data', error);
    }
  };

  return (
    <div className='flex flex-col'>
        <div className=' bg-green-500 flex h-[60px] items-center justify-center'>
            <h2 className='text-2xl   text-white '>product</h2>
        </div>
        <div className='bg-red-300'>body</div>
    </div>
  )
}
