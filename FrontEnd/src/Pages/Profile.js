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
  const [isMsgError, setIsMsgError] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

   const token = Cookies.get('token');
  //const token = localStorage.getItem('authToken');

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
        console.log(res.data.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (nPassword !== cPassword) {
      setMessage('Passwords do not match!');
      setIsMsgError(true);
      clearMessageAfterTimeout();
      return;
    }
    try {
      const updateUser = {
        name,
        email,
        newPassword: nPassword,
        confirmPassword: cPassword,
      };
      const res = await axios.patch('http://localhost:5000/user/update/me', updateUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Profile Updated Successfully');
      setIsMsgError(false);
      clearMessageAfterTimeout();
      console.log('updated!');
    } catch (error) {
      setMessage('Failed to update profile');
      setIsMsgError(true);
      clearMessageAfterTimeout();
      console.log('Failed to update profile');
    }
  };

  const handleLogOut = async () => {
    try {
      await axios.post('http://localhost:5000/user/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('LogOut Successfully');
      setIsMsgError(false);
      clearMessageAfterTimeout();
      console.log('LogOut Successfully!');
      Cookies.remove('token');
      localStorage.removeItem('authToken');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage('');
    }, 6000); 
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex h-auto w-[500px] flex-col items-center justify-center py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4 py-2 bg-green-400 w-full'>My Profile</h1>
        {message && (
          <div className={`mb-4 text-center ${isMsgError ?'text-red-500' :'text-green-500'}`}>
            {message}
          </div>
        )}



        <form className='w-full max-w-sm' onSubmit={handleUpdate}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Name</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              value={name}
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
              value={email}
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
              value={nPassword}
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
              value={cPassword}
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
                  type="submit"
                >
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button" onClick={handleLogOut}
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
