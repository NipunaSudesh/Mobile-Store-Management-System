import React from 'react'
import { Header } from './Header'
import { ProductCard } from './ProductCard';
import {apple13} from '../assets/index';

export const LatestMobile = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Header Title='LATEST MOBILE PHONES' />
        </div>
        <div>
          <ProductCard title={"Apple iPhone 13 Pro Max 256GB"}
          price={"RS.350000"}
          image={apple13}/>
        </div>
    </div>
  )
}
