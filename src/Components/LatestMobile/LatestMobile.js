import React from 'react'
import { Header } from '../Header'
import { LatestCard } from './LatestCard'

export const LatestMobile = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Header Title='LATEST MOBILE PHONES' />
        </div>
        <div>
          <LatestCard />
        </div>
    </div>
  )
}
