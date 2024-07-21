import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export const ProductCard = ({ name, details, price, image, id, type }) => {
  const [userId, setUserId] = useState('');
  const [productId] = useState(id);
  const [pType] = useState(type);
  const navigate = useNavigate();
  const discountedWithoutPrice = price * 1.1;
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserId(res.data._id);
        console.log("Logged in user ID: ", res.data._id);
      } catch (error) {
        console.log('Failed to fetch user', error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const handleAddCard = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (token) {
        navigate('/addcard');
        await axios.post('http://localhost:5000/card/add', {
          userId,
          productId,
          type: pType,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Added to cart');

      } else {
        navigate('/');
      }
    } catch (error) {
      console.log('Failed to add to cart', error);
    }
  };

  const handleView = () => {
    if (type === 'feature') {
      navigate(`/ViewFeature/${id}`);
    } else {
      navigate(`/ViewLatest/${id}`);
    }
  }

  return (
    <div className='h-auto w-[240px] items-center rounded-5g shadow-lg flex flex-col rounded-[5%] my-10 group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'
      onClick={handleView}>
      <div className="relative w-full m-1 overflow-hidden rounded-lg group">
        <img
          className="mx-auto w-60 h-[250px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        <div className="absolute mb-2 bottom-0 left-0 right-0 mt-3 ml-3 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex justify-center space-x-2">
          <Link
            type="button"
            className="text-white bg-blue-500 w- hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAddCard}
          >
            Add To Cart
          </Link>
          <button
            type="button"
            className="text-white bg-blue-500 w-24 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Buy
          </button>
        </div>
      </div>

      <div className="flex flex-col mb-2 mt-2 items-center text-center">
        <h2 className='font-semibold text-blue-500'>{name}</h2>
        <h2 className='font-normal'>{details}</h2>
        <div className='flex gap-4'>
          <h3><span className='line-through text-gray-400'>RS.{Math.floor(discountedWithoutPrice)}</span></h3>
          <h3><span className='text-red-500'>RS.{price}</span></h3>
        </div>
      </div>
    </div>
  )
}
