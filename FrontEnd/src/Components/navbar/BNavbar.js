import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BNavbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('Home');
      const brandSection = document.getElementById('Brand');
      const latestMobileSection = document.getElementById('LatestMobile');
      const featuredMobileSection = document.getElementById('FeaturedMobile');
      const aboutUsSection = document.getElementById('AboutUs');

      const scrollPosition = window.scrollY + 220;


      if (scrollPosition >= homeSection.offsetTop && scrollPosition < brandSection.offsetTop) {
        setActiveLink('Home');
      } else if (scrollPosition >= brandSection.offsetTop && scrollPosition < latestMobileSection.offsetTop) {
        setActiveLink('Brand');
      } else if (scrollPosition >= latestMobileSection.offsetTop && scrollPosition < featuredMobileSection.offsetTop) {
        setActiveLink('LatestMobile');
      } else if (scrollPosition >= featuredMobileSection.offsetTop && scrollPosition < aboutUsSection.offsetTop) {
        setActiveLink('FeaturedMobile');
      } else if (scrollPosition >= aboutUsSection.offsetTop) {
        setActiveLink('AboutUs');
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminPanel = () => {
    setActiveLink('AdminPanal');
    navigate("/adminpanel");
  }

  return (
    <div className='bg-gray-200 py-1 nav-links items-center justify-center mx-auto shadow-md sticky top-0 z-40'>
      <ul className='flex justify-center gap-2 mdl:gap-3 lgl:gap-10 sm:flex-nowrap'>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <a
            className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Home' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#Home"
            onClick={() => setActiveLink('Home')}
          >
            Home
          </a>
        </li>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <a
            className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Brand' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#Brand"
            onClick={() => setActiveLink('Brand')}
          >
            Brand
          </a>
        </li>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <a
            className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'LatestMobile' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#LatestMobile"
            onClick={() => setActiveLink('LatestMobile')}
          >
            LatestMobile
          </a>
        </li>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <a
            className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'FeaturedMobile' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#FeaturedMobile"
            onClick={() => setActiveLink('FeaturedMobile')}
          >
            FeaturedMobile
          </a>
        </li>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <a
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'AboutUs' ? 'text-red-700 underline' : 'text-blue-500'}`}
            href="#AboutUs"
            onClick={() => setActiveLink('AboutUs')}
          >
            AboutUs
          </a>
        </li>
        <li className='p-1 hover:bg-gray-300 rounded-sm'>
          <button
            className={` text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'AdminPanal' ? 'text-red-700 underline' : 'text-blue-500'}`}
            onClick={handleAdminPanel}
          >
            AdminPanel
          </button>
        </li>
      </ul>
    </div>
  );
};
