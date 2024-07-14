
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../Components/ProductCard';
import { Header } from './Header';

export const RelatedMobile = ({brand}) => {
  const [latestMobile, setLatestMobile] = useState([]);
  const [featureMobile, setFeatureMobile] = useState([]);
  //const { brand } = useParams();

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
      <div className=' flex text-center items-center justify-center'>
        <Header Title={'RELATED PRODUCTS'} />
      </div>
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

