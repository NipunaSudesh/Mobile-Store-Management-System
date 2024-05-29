import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const ads = [
  { id: 1, image: 'https://via.placeholder.com/300x200?text=Ad+1' },
  { id: 2, image: 'https://via.placeholder.com/300x200?text=Ad+2' },
  { id: 3, image: 'https://via.placeholder.com/300x200?text=Ad+3' },
  // Add more ads as needed
];

export const AdSwiper = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
              <img src={ad.image} alt={`Advertisement ${ad.id}`} className="w-full h-auto" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


