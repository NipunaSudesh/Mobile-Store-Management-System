import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const ads = [
  { id: 1, image: 'https://i.gadgets360cdn.com/large/s23_ultra_samsung_green_1701921606307.jpg?downsize=950:*' },
  { id: 2, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/34b5bf180145769.6505ae7623131.jpg' },
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcLpkGJFcw_lbXpQHIF8SE-srqkrldmyOWw&s' },

];

export const AdSwiper = () => {
  return (
    <div className="max-w-[1400px] w-full  mx-auto px-4 relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {ads.map(ad => (
          <SwiperSlide key={ad.id}>
            <a href={ad.link} target="_blank" rel="noopener noreferrer">
              <img src={ad.image} alt={`Advertisement ${ad.id}`} className="w-full h-[600px] rounded-2xl bg-center bg-cover" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


