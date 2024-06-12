import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const ProductCategory = () => {
 const productLogo = [
    {
        id: 1, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqvprPWkD0AFap-C4otTt98AQSyRqS7mDNA&s'
    },
    {
        id: 2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhim7QaX3BHLGy2ZLoiqxeGD914Y65pGZXA&s'
    },
    {
        id: 3, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9dXLNC7ZD88yfXGBfEmIF6VkIKz6HjVPPg&s'
    },
    {
        id: 4, logo: 'https://pngimagesfree.com/wp-content/uploads/Oneplus-PNG-Logo-1.png'
    },
    {
        id: 5, logo: 'https://styles.redditmedia.com/t5_3fy38/styles/communityIcon_4h9nc2tj54u51.jpg?format=pjpg&s=5850d2f6614d2d739dad06fd3db2bc03732a1654'
    },
    {
        id: 6, logo: 'https://seeklogo.com/images/M/mi-mobile-logo-9F4E2AC84D-seeklogo.com.png'
    },
    {
        id: 7, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmam6bJjeGmYT5jGWv-qNN90B8A1UB_v-O4g&s'
    }

 ];

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 relative">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          100: { slidesPerView: 1 },
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          550: { slidesPerView: 4 },
          900: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
          1400: { slidesPerView: 6 },
        }}
        loop
      >
        {productLogo.map(logo => (
          <SwiperSlide key={logo.id}>
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.logo} alt={`Advertisement ${logo.id}`} className="w-full h-[200px]  rounded-2xl bg-center bg-cover" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
