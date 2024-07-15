import React from 'react';
import {TNavBar} from './TNavBar';
import {BNavBar} from './BNavBar';

export const NavBar = () => {
  return (
    <div className='w-full sticky top-0 z-40'>
      <div>
        <TNavBar />
      </div>
      <div>
        <BNavBar />
      </div>
    </div>
  )
}
