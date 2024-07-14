import React from 'react';
import {TNavBar} from './TNavBar';
import {BNavBar} from './BNavBar';

export const NavBar = () => {
  return (
    <div className='w-full'>
      <div>
        <TNavBar />
      </div>
      <div>
        <BNavBar />
      </div>
    </div>
  )
}
