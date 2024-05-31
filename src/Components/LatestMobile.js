import React from 'react'
import { Header } from './Header'
import { ProductCard } from './ProductCard'

export const LatestMobile = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Header Title='LATEST MOBILE PHONES' />
        </div>
        <div>
          <ProductCard />
        </div>
    </div>
  )
}
