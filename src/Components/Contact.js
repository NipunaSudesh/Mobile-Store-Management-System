import React from 'react'
import { logo1 } from '../assets/index';
import { FaAddressCard , FaPhoneAlt} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdMobileScreenShare } from "react-icons/md";

export const Contact = () => {
  return (
    <div className='flex gap-8 w-full bg-gray-200 h-[500px]'>
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

        <div className='w-1/2 '></div>
    </div>
  )
}
