import React from 'react'
import {NavBar} from '../Components/navbar/NavBar';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer ';
import { contactus } from '../assets/index';

export const ContactUs = () => {
  return (
    <div id='ContactUs' className='flex flex-col gap-8 w-full'>
      <div>
        <NavBar />
      </div>
      <div className=' flex md:flex-row flex-col items-center justify-center'>
        <div className='w-full md:w-1/2 items-center justify-center flex'>
   <img src={contactus} alt="contactus" className='w-[70%]'/>
        </div>
<div className="w-full md:w-1/2 flex items-center justify-center ">

  <form className="w-full h-full p-6 bg-slate-300 rounded-lg shadow-2xl mx-10 md:py-20 mt-10 md:mt-0">
    <h1 className="text-center text-2xl mb-4 mt-4">Send Message</h1>

            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Full Name</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                name='name'
                placeholder='Enter Your Name'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Email</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Massage</lable>
                <textarea 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='msg'
                type='text'
                name='msg'
                placeholder='Enter Your Massage'
                required
                />
            </div>

            <div className="flex items-center justify-between w-full">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Massage
          </button>
        </div>
        </form>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
      </div>
  )
}
