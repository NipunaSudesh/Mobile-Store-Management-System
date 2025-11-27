import React from 'react'
import {NavBar} from '../Components/navbar/NavBar';
import {Header} from '../Components/Header';

export const FeaturedMobile = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <NavBar />
      </div>
            <div className='text-center'>
              <Header Title="Featured Mobile" />
            </div>
      </div>
  )
}
