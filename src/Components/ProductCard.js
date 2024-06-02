import React from 'react'


export const ProductCard = ({name,price,image}) => {
  return (
    <div className='h-auto w-full items-center  rounded-5g shadow-md flex flex-col
    bg-gradient-to-r from-[#eff1ef] to-[#939493] group hover:bg-gradient-to-b
    hover: from-gray-900, hover:gray-900 transition-colors duration-1000 rounded-[5%] my-10'>
      
      <div className="relative w-full m-1 overflow-hidden rounded-lg group">
  <img
    className="mx-auto w-60 h-55 rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
    src={image}
    alt="src"
  />
  <div className="absolute mb-2 bottom-0 left-0 right-0 mt-3 ml-3 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex justify-center space-x-2">
    <button
      type="button"
      className="text-white bg-blue-500 w- hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      name="addCard"
    >
      Add To Cart
    </button>
    <button
      type="button"
      className="text-white bg-blue-500 w-24 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      name="buy"
    >
      Buy
    </button>
  </div>
</div>

      <div className="flex flex-col gap-1 mt-2 items-center">
        <h2 className='font-semibold'>{name}</h2>
        <h3><span className='text-blue-700'>{price}</span></h3>
      </div>
    </div>
  )
}

// ml-3 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100
// absolute left-0 bottom-0 w-full h-0 bg-gradient-to-t from-[#ff3700] to-[rgba(24, 23, 23, 0.6)] flex items-center justify-center text-center p-4 rounded-lg transition-[height] duration-500 group-hover:h-full

// hidden group-hover:block mt-2 ml-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100