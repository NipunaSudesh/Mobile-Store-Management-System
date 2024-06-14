import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
    const [name ,setName]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();
    const [message, setMessage] = useState('');
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
          const response = await axios.post('http://localhost:5000/register', { name, email, password });
          console.log(response.data);
          setMessage('Registration successful! Redirecting to login...');
          setTimeout(() => {
            navigate('/login');
          }, 2000); 
        } catch (error) {
          console.error(error);
          if (error.response && error.response.data) {
            setMessage(`Registration failed! ${error.response.data.message}`);
          } else {
            setMessage('Registration failed! Please try again.');
          }
        }
      };
      


  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4'>Register</h1>
        {message && (
            <div className='mb-4 text-center text-green-500'>
            {message}
          </div>)}
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Name</lable>
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
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</lable>
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
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</lable>
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            href='./login' 
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
