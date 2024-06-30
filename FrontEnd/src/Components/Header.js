import React from 'react'

export const Header = ({Title}) => {
  return (
    <div className='mt-10 mb-5 w-full border-b-2 border-gray-500'>
        <h2 className=' text-4xl font-semibold uppercase'>{Title}</h2>
    </div>
  )
}
