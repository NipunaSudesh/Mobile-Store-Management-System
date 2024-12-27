import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
    const [name ,setName]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();
    const [message, setMessage] = useState('');
    const [eMessage, setEMessage] = useState('');
    const [isMsgError, setIsMsgError,] = useState(false);
    //const [cpassword ,setCPassword]=useState();

    const navigate = useNavigate();

    const handleCancel = () => {
      navigate('/');
    };

    const handleLoginRedirect = (e) => {
        e.preventDefault();
        navigate('/login');
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/user/register', { name, email, password });
          console.log(response.data);
          const {token} =response.data;;
          localStorage.setItem('authToken',token);
          setMessage('Registration successful! Redirecting to login...');
          setIsMsgError(false);
          clearMessageAfterTimeout();
          setTimeout(() => {
            navigate('/login');
          }, 2000); 
        } catch (error) {
          console.error(error);
          if (error.response && error.response.data) {
            setMessage(`Registration failed! ${error.response.data.message}`);
            setIsMsgError(true);
            clearMessageAfterTimeout();
          } else {
            setMessage('Registration failed! Please try again.');
            setIsMsgError(true);
            clearMessageAfterTimeout();
          }
        }
      };
      const clearMessageAfterTimeout = () => {
        setTimeout(() => {
          setMessage('');
        }, 60000); 
      };


  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4 py-2 bg-green-400 w-full'>Register</h1>
        {message && (
            <div className={`mb-4 text-center ${isMsgError ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </div>)}
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Name</label>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                name='name'
                placeholder='Enter Your Name'
                required
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                name='password'
                placeholder='Enter Your Password'
                required
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>

            <div className='flex gap-10 items-center justify-center'>
            <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
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
        <div className='mt-4 text-center'>
        <a 
            href='/login' 
            className='text-blue-500 hover:text-blue-700'
            onClick={handleLoginRedirect}
            >
            Already Have Account?Login
            </a>
          </div>
        </form>
    </div>
    
    </div>
  )
}
