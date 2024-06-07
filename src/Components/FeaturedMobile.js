import React from 'react'
import { Header } from './Header';
import { ProductCard } from './ProductCard';
import {apple13} from '../assets/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const FeaturedMobile = () => {
  return (
    <div className="lgl:max-w-[1300px] w-full  mx-auto px-4 relative">
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      loop
    >
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
     <SwiperSlide> 
     <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
     </SwiperSlide>
    </Swiper>
  </div>
  )
}
