import React from 'react';
import { Header } from './Header';
import { ProductCard } from './ProductCard';
import { apple13 } from '../assets/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const FeaturedMobile = () => {
  return (
    <div className="flex flex-col max-w-[1400px]">
      <div className='text-center'>
        <Header Title="Featured Mobile" />
      </div>
      <div className="lgl:max-w-[1300px] w-full mx-auto px-4 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay ]}
          spaceBetween={10}
          slidesPerView={5}
          slidesPerColumn={2} 

          breakpoints={{
            320: { slidesPerView: 1 }, 
            480: { slidesPerView: 2 }, 
            640: { slidesPerView: 3 }, 
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }, 
           
          }}
          autoplay={{ delay: 2000 }}
          loop
        >
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              name={"Apple iPhone 13 Pro Max 256GB"}
              price={"RS.350000"}
              image={apple13}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
