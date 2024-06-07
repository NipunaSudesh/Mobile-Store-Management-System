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
  { id: 3, image: 'https://i.pinimg.com/736x/9b/62/02/9b620218a5a170af3445f543df59a1e0.jpg' },
  { id: 4, image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/oneplus-12-165620689-16x9_1.png?VersionId=eQkR0KA76dMkQwxxHHXwRATGcGFxC3Di&size=690:388' },
  { id: 5, image: 'https://freight.cargo.site/t/original/i/74d4dbefaaefe21d8edd4a82d2fbf9e973f2fdc37557c73626247c3a271b46dc/GOO_SELECTS_FALL_PIXEL_FINALb7.jpg' },

];

export const AdSwiper = () => {
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
        {ads.map(ad => (
          <SwiperSlide key={ad.id}>
            <a href={ad.link} target="_blank" rel="noopener noreferrer">
              <img src={ad.image} alt={`Advertisement ${ad.id}`} className="w-full h-[530px] rounded-2xl bg-center bg-cover" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


