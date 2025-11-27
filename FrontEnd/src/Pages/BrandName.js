import React from 'react'
import {NavBar} from '../Components/navbar/NavBar';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer ';
import { Link, useNavigate } from 'react-router-dom';

export const BrandName = () => {
    const navigate=useNavigate();
 const productLogo = [
    {
         brand: "apple",logoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqvprPWkD0AFap-C4otTt98AQSyRqS7mDNA&s'
    },
    {
        brand: "samsung", logoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhim7QaX3BHLGy2ZLoiqxeGD914Y65pGZXA&s'
    },
    {
        brand: "huawei", logoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9dXLNC7ZD88yfXGBfEmIF6VkIKz6HjVPPg&s'
    },
    {
        brand: "oneplus", logoURL: 'https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.png'
    },
    {
        brand: "googlePixal", logoURL: 'https://styles.redditmedia.com/t5_3fy38/styles/communityIcon_4h9nc2tj54u51.jpg?format=pjpg&s=5850d2f6614d2d739dad06fd3db2bc03732a1654'
    },
    {
        brand: "xiaomi", logoURL: 'https://cdn.worldvectorlogo.com/logos/xiaomi-logo-2.svg'
    },
    {
        brand: "oppo", logoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmam6bJjeGmYT5jGWv-qNN90B8A1UB_v-O4g&s'
    }

 ];
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <NavBar />
      </div>
     <div className='text-center flex flex-col items-center justify-center mb-5'>
              <Header Title="Brands" />
              <div className='grid grid-cols-2 sml:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto'>
                {productLogo.map((product)=>(

                  <div key={product.brand} className='flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-2xl cursor-pointer ' onClick={()=>navigate(`/brandItems/${product.brand}`)}>
                    <img src={product.logoURL} alt={product.brand} className='w-24 h-24 object-contain mb-2' />
                    <h3 className='text-lg font-medium capitalize text-green-700'>{product.brand}</h3>
                  </div>
                ))}
              </div>
        </div>
<Footer />
      </div>

  )
}
