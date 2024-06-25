import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [details, setDetails] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [isMsgError, setIsMsgError] = useState('');
    const navigate = useNavigate();

  const handleAddProduct = async (e)=>{
    e.preventDefault();
    try {
      const res =await axios.post('http://localhost:5000/product/add',{
        name,price,imageURL,year,brand,details,description
      });
      setMessage('Added Product successful! Redirecting to home...');
      setIsMsgError(false);
      clearMessageAfterTimeout();
      setTimeout(() => {
        navigate('/');
      }, 2000); 
      console.log(res.data);

    } catch (error) {
      setMessage('Registration failed! Please try again.');
      setIsMsgError(true);
      clearMessageAfterTimeout();
    }
  };
  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage('');
    }, 60000); 
  };
 
    const handleCancel = () => {
        navigate('/');
      };

  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex  h-auto w-[700px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center py-2 bg-green-400 w-full text-2xl mb-4'>Add Product</h1>
        {message && (
            <div className={`mb-4 text-center ${isMsgError ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </div>)}
        <form className='w-[80%] text-center' onSubmit={handleAddProduct}>
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
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setPrice(e.target.value)}
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
                onChange={(e)=>setBrand(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Product Details</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='details'
                value={details}
                type='text'
                name='details'
                placeholder='Enter RAM ROM'
                required
                onChange={(e)=>setDetails(e.target.value)}
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
                onChange={(e)=>setYear(e.target.value)}
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
                onChange={(e)=>setImageURL(e.target.value)}
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
                onChange={(e)=>setDescription(e.target.value)}
         
                />
            </div>
            <div className='mb-4 flex gap-10 items-center justify-center'>
            <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
