import React from 'react'
import { logo1 } from '../assets/index';
import { FaAddressCard , FaPhoneAlt} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdMobileScreenShare } from "react-icons/md";

export const Contact = () => {
  return (
    <div className='flex gap-8 w-full bg-gray-200 my-5 py-5'>
        <div className='w-1/3 mt-4 items-center'>
        <img src={logo1} alt='logo' width="80" height="80" className='mx-auto mb-1 logo '/>
            <h2 className='text-2xl text-center'>Smart Mobile(Pvt) Ltd</h2>

            <div className='flex gap-2 mt-2 hover:text-blue-500'>
                <FaAddressCard className='h-6 w-6'/>
            <p>Hunupitiya Road,dalugama,Kelaniya</p>
            </div>
            <div className='flex gap-2 mt-2 hover:text-blue-500'>
                <FaPhoneAlt className='h-6 w-6'/>
            <p>0112345678</p>
            </div>
            <div className='flex gap-2 mt-2 hover:text-blue-500'>
                <MdMobileScreenShare className='h-6 w-6'/>
            <p>0766521915</p>
            </div>
            <div className='flex gap-2 mt-2 hover:text-blue-500'>
                <MdOutlineEmail className='h-6 w-6'/>
            <p>smartmobile@gmail.om</p>
            </div>

        </div>
        
        
        <div className='w-1/3 mt-10'>
            <h2 className='text-xl '>CUSTOMER CARE</h2>
            <p className='gap-2 mt-2 hover:text-blue-500'>My Account</p>
            <p className='gap-2 mt-2 hover:text-blue-500'>Privacy Policy</p>
            <p className='gap-2 mt-2 hover:text-blue-500'>Returns and Refunds</p>
            <p className='gap-2 mt-2 hover:text-blue-500'>Terms & Conditions</p>
            <p className='gap-2 mt-2 hover:text-blue-500'>Online Payments</p>
        </div>

        <div className='w-1/2 '>
        <div className='flex m-4 '>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4'>Send Massage</h1>
        <form className='w-full max-w-sm'>

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
            </div>
    </div>
  )
}
