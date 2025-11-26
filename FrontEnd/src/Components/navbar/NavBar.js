// import React from 'react';
// import {TNavBar} from './TNavBar';
// import {BNavBar} from './BNavBar';

// export const NavBar = () => {
//   return (
//     <div className='w-full sticky top-0 z-40'>
//       <div>
//         <TNavBar />
//       </div>
//       <div>
//         <BNavBar />
//       </div>
//     </div>
//   )
// }
// src/components/navbar/NavBar.jsx
import React, { useState } from "react";
import { TNavBar } from "./TNavBar";
import { BNavBar } from "./BNavBar";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">

      {/* Top navbar */}
      <TNavBar showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* Desktop bottom navbar */}
      <div className="hidden md:block">
        <BNavBar />
      </div>

      {/* Mobile Right Slide Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 md:hidden">

          {/* Background dim */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setShowMenu(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-4 animate-slide">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setShowMenu(false)}
            >
              ✕
            </button>

            {/* Mobile BNavBar */}
            <BNavBar mobile onClose={() => setShowMenu(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

