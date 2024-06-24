import React from 'react'; // Remove duplicate import
import Cookies from 'js-cookie';
import { logo1 } from '../assets/index';
import { RiAccountCircleFill } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const handleAccount= ()=>{
    if(!token){
    navigate('/signup');
    }
    else{
      navigate('/profile');
    }
  };

  const handleAddCard =()=>{
    navigate('/addcard');
  };

  const handleAddProduct =()=>{
    navigate('/addproduct');
  };


  return (
    <div className='shadow sticky top-0 z-40 px-16 bg-bodyColor border-b-[2px] border-b-black flex w-full h-15 mx-auto justify-between items-center font-normal'>
      <div>
        <img src={logo1} alt='logo' width="50" height="50" className='rounded-full logo'/>
      </div>
      <div className="mb-3 xl:w-96">
          <div className="relative mb-4 pt-4 flex w-full flex-wrap items-stretch ">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-#e6e6e6 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 placeholder:text-gray-300 dark:placeholder:text-gray-300 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

            
              <span
                  className="input-group-text flex items-center hover:designColor border-solid border-white whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>
      <div className='flex gap-4'>
      <div className='w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300'
      onClick={handleAddCard}>   
          <MdShoppingCart/>
      </div>
      <div className='w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300' 
      onClick={handleAccount}
      >   
             <RiAccountCircleFill/>
      </div>
      <div className='w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:text-designColor cursor-pointer duration-300' 
      onClick={handleAddProduct}
      >   
             <IoBagAdd/>
      </div>
      </div>
    </div>
    
  )
}
