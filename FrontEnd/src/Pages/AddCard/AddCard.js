import React, { useEffect, useState } from 'react';
import { TNavBar } from '../../Components/navbar/TNavBar';
import { CardItem } from './CardItem';
import Cookies from 'js-cookie';
import axios from 'axios';

export const AddCard = () => {
  const token = Cookies.get('token');
  const [userId, setUserId] = useState('');
  const [mobile, setMobile] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const perItemShippingFee = 750;
  const total = subTotal + shippingFee;

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

  useEffect(() => {
    const fetchProduct = async () => {
      if (userId) {
        try {
          const res = await axios.get(`http://localhost:5000/card/get/${userId}`);
          setMobile(res.data);
          const calculatedSubTotal = res.data.reduce((acc, item) => acc + item.price * item.quantity, 0);
          const calculatedShippingFee = res.data.reduce((acc, item) => acc + perItemShippingFee * item.quantity, 0);
          setSubTotal(calculatedSubTotal);
          setShippingFee(calculatedShippingFee);
        } catch (error) {
          console.log('Failed to fetch product', error);
        }
      }
    };
    fetchProduct();
  }, [userId]);

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <TNavBar />
      </div>
      <div className='flex gap-4 mx-10 w-[90%]'>
        <div className='w-3/5 flex flex-col gap-2'>
          <h1 className='text-xl font-semibold'>Shopping Cart</h1>
          <div className='mx-2'>
            <h2 className='text-sm font-semibold'>Shopping by Smart Mobile</h2>
          </div>
          <div className='flex flex-col gap-2'>
            {mobile.map((cardDetails) => (
              <CardItem
                key={cardDetails._id}
                name={cardDetails.name}
                price={cardDetails.price}
                details={cardDetails.details}
                imgURL={cardDetails.imgURL}
                quantity={cardDetails.quantity}
              />
            ))}
          </div>
        </div>

        <div className='w-2/5 flex flex-col gap-2'>
          <div className='m-4 bg-gray-200 flex flex-col justify-center my-auto mx-auto w-[90%] rounded-lg shadow-xl p-4'>
            <h1 className='text-xl font-semibold'>Summary</h1>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between'>
                <h2>Sub Total</h2>
                <h2>LKR.{subTotal}</h2>
              </div>
              <div className='flex justify-between'>
                <h2>Shipping Fee</h2>
                <h2>LKR.{shippingFee}</h2>
              </div>
              <div className='flex justify-between'>
                <h2>Total</h2>
                <h2>LKR.{total}</h2>
              </div>
              <div className='flex'>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
