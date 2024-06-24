import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nPassword, setNPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const navigate = useNavigate();


  const token = Cookies.get('token');
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        console.log('No token found, please login.');
        navigate('/login');
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setName(res.data.name);
        setEmail(res.data.email);
        setUserDetails(res.data);
      //  console.log('User data fetched:', res.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex h-auto w-[500px] flex-col items-center justify-center py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4 py-2 bg-green-400 w-full'>My Profile</h1>
        {message && (
          <div className='mb-4 text-center text-green-500'>
            {message}
          </div>
        )}

        <form className='w-full max-w-sm'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Name</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              name='name'
              placeholder={userDetails.name || 'Enter Your Name'}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="Email">Email</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              name='email'
              placeholder={userDetails.email || 'Enter Your Email'}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="Password">New Password</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='nPassword'
              type='password'
              name='nPassword'
              placeholder='Enter New Password'
              onChange={(e) => setNPassword(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="cPassword">Confirm Password</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='cPassword'
              type='password' 
              name='cPassword'
              placeholder='Confirm Password'
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-4 items-center justify-center my-5'>
            <div className='flex gap-4 items-center justify-center w-full'>
              <div className="flex items-center justify-between w-full">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Log Out
                </button>
              </div>
            </div>
            <div className='bg-red-300 w-full items-center justify-between'>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button" onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
