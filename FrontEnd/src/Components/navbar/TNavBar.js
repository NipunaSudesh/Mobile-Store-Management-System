
import React, { useState } from "react";
import Cookies from "js-cookie";
import { logo1 } from "../../assets/index";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export const TNavBar = ({ showMenu, setShowMenu }) => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleAccount = () => {
    if (!token) navigate("/signup");
    else navigate("/profile");
  };

  const handleAddCard = () => navigate("/addcard");

  return (
    <div className="w-full bg-bodyColor shadow px-6 py-2 flex items-center justify-between">

      {/* Logo */}
<div className="flex">
        <a href="/">
        <img src={logo1} width="50" className="rounded-full" alt="logo" />
      </a>
</div>
<div className="flex ">
      <div className="relative w-full max-w-xs mx-3 ">
        {/* {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white px-3 py-2 rounded-md animate-fade"
          />
        )} */}
      </div>
 
      <div className="relative mx-3 flex gap-2">
        
          <input
            type="text"
            placeholder="Search..."
            className=" bg-gray-800 text-white px-3 py-2 rounded-md animate-fade w-[50px] xs:w-[80px] sml:w-[300px] lg:w-[500px] h-9 mt-1"
          />
              <button
          className="w-9 h-9 bg-black bg-opacity-25 text-white items-center justify-center rounded-md text-xl mt-1"
          // onClick={() => setShowSearch(!showSearch)}
        >
          🔍
        </button>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">

        {/* Search icon (mobile only) */}
        {/* <button
          className="text-white text-xl md:hidden w-9 h-9 bg-black bg-opacity-25 flex items-center justify-center rounded-md"
          onClick={() => setShowSearch(!showSearch)}
        >
          🔍
        </button> */}
     </div>
     </div>
     <div className="flex gap-4">
        {/* Cart */}
        <button
          onClick={handleAddCard}
          className="w-9 h-9 bg-black bg-opacity-25 text-white flex items-center justify-center rounded-md"
        >
          <MdShoppingCart />
        </button>

        {/* Profile */}
        <button
          onClick={handleAccount}
          className="w-9 h-9 bg-black bg-opacity-25 text-white flex items-center justify-center rounded-md"
        >
          <RiAccountCircleFill />
        </button>

        {/* Menu button (mobile) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setShowMenu(true)}
        >
          ☰
        </button>
 </div>
    </div>
  );
};
