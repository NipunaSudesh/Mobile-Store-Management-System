import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
    const [username ,setUserName]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();
    const [cpassword ,setCPassword]=useState();

    const navigate = useNavigate();

    const handleCancel = () => {
      navigate('/');
    };

    const handleLoginRedirect = (e) => {
        e.preventDefault();
        navigate('/login');
      };

      const handleSubmit =(e) =>{
          e.preventDefault()
          axios.post('',{username,email,password,cpassword})
          .then(result =>console.log(result))
          .catch(err =>console.log(err))
      };


  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4'>Register</h1>
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">User Name</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                name='username'
                placeholder='Enter Your User Name'
                required
                onChange={(e)=>setUserName(e.target.value)}
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
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="cpassword">Confirm Password</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='cpassword'
                name='cpassword'
                type='password'
                placeholder='Enter Confirm Password'
                required
                onChange={(e)=>setCPassword(e.target.value)}
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
            Cansal
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
