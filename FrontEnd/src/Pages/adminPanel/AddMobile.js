import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddMobile = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [details, setDetails] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [isMsgError, setIsMsgError] = useState(false);
    const navigate = useNavigate();
  
    const handleAddProduct = async (e) => {
      e.preventDefault();
      try {
        const payload = {
          name,
          price: parseFloat(price),
          imgURL,
          year: parseInt(year), 
          brand,
          details,
          description
        };
  
        console.log('Sending payload:', JSON.stringify(payload, null, 2));
  
        const res = await axios.post('http://localhost:5000/feature-mobile/add', payload);
        setMessage('Added Product successful!');
        setIsMsgError(false);
        clearMessageAfterTimeout();
        setName('');
        setPrice('');
        setImgURL('');
        setYear('');
        setBrand('');
        setDetails('');
        setDescription('');
        //window.location.reload();
        console.log(res.data);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        setMessage('Product Add failed! Please try again.');
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
        <div className='flex h-auto w-[700px] flex-col items-center justify-center py-2 rounded shadow-2xl border-2'>
          <h1 className='text-center py-2 bg-green-400 w-full text-2xl mb-4'>ADD FEATURED MOBILE PHONES</h1>
          {message && (
            <div className={`mb-4 text-center ${isMsgError ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </div>
          )}
          <form className='w-[80%] text-center' onSubmit={handleAddProduct}>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-2' htmlFor='name'>Product Name</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                value={name}
                type='text'
                name='name'
                placeholder='Enter product Name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>Product Price</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='price'
                type='text'
                value={price}
                name='price'
                placeholder='Enter product Price'
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='brand'>Product Brand</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='brand'
                value={brand}
                type='text'
                name='brand'
                placeholder='Enter product Brand'
                required
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='details'>Product Details</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='details'
                value={details}
                type='text'
                name='details'
                placeholder='Enter RAM ROM'
                required
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='year'>Product Year</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='year'
                value={year}
                type='text'
                name='year'
                placeholder='Enter product Year'
                required
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='imgURL'>Image URL</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='imgURL'
                value={imgURL}
                type='text'
                name='imgURL'
                placeholder='Enter Image URL'
                required
                onChange={(e) => setImgURL(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Description</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='description'
                value={description}
                name='description'
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='mb-4 flex gap-10 items-center justify-center'>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Add Product
                </button>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  

 