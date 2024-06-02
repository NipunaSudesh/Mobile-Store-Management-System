import React from 'react'
import { Header } from './Header'
import { ProductCard } from './ProductCard';
import {apple13} from '../assets/index';

export const LatestMobile = () => {
  return (
    <div className='flex flex-col'>
        <div className='text-center'>
            <Header Title='LATEST MOBILE PHONES' />
        </div>
        <div className='grid md:grid-cols-3 mdl:grip-cols-2 lgl:grid-cols-5 gap-x-4 '>
          <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
          <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
          <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
          <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
          <ProductCard name={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>



        </div>
    </div>
  )
}
