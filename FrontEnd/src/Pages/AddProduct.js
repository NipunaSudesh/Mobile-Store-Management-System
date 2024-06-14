import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
 
    const handleCancel = () => {
        navigate('/');
      };

  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex  h-auto w-[700px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center py-2 bg-green-400 w-full text-2xl mb-4'>Add Product</h1>
        <form className='w-[80%] text-center'>
            <div className='mb-4'>
                <lable className='block text-sm font-bold mb-2' htmlFor="password">Product Name</lable>
                <input 
                className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                value={name}
                type='text'
                name='name'
                placeholder='Enter product Name'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Product Price</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='Price'
                type='text'
                value={price}
                name='Price'
                placeholder='Enter product Price'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Product Brand</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='Brand'
                value={brand}
                type='text'
                name='Brand'
                placeholder='Enter product Brand'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Product Year</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='Year'
                value={year}
                type='text'
                name='Year'
                placeholder='Enter product Year'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Image URL</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='ImageURL'
                value={imageURL}
                type='text'
                name='ImageURL'
                placeholder='Enter Image URL'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">description</lable>
                <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='description'
                type='text'
                value={description}
                name='description'
                placeholder='Enter description'
         
                />
            </div>
            <div className='mb-4 flex gap-10 items-center justify-center'>
            <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg--green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
            <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        </div>
        </form>
    </div>
    </div>
  )
}
