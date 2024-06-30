import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { ProductCard } from './ProductCard';
import { apple13 } from '../assets/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';

export const FeaturedMobile = () => {
const [data,setDate] =useState([]);

useEffect(()=>{
  fetchData();
},[]);

const fetchData = async ()=>{
    try {
      const res =await axios.get('http://localhost:5000/feature-mobile/get');
      setDate(res.data);
      console.log('get data');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col max-w-[1400px]">
      <div className='text-center'>
        <Header Title="Featured Mobile PHONES" />
      </div>
      <div className="lgl:max-w-[1300px] w-full mx-auto px-4 relative ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay ]}
          spaceBetween={10}
          slidesPerView={5}
          //slidesPerColumn={2} 

          // breakpoints={{
          //   320: { slidesPerView: 3 }, 
          //   480: { slidesPerView: 4 }, 
          //   640: { slidesPerView: 4 }, 
          //   768: { slidesPerView: 5 }, 
          //   1024: { slidesPerView: 5 },
          //   1280: { slidesPerView: 6 }, 
           
          // }}
          autoplay={{ delay: 2000 }}
          loop
        >
      {data.map((mobile) => (
        <SwiperSlide key={mobile._id}>
          <ProductCard
            name={mobile.name}
            price={mobile.price}
            image={mobile.imgURL}
            details={mobile.details}
          />
        </SwiperSlide>
      ))}
     
       
          {/* <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>  */}
        </Swiper>
      </div>
    </div>
  );
};
