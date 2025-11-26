import React from "react";

export const MobileSideMenu = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">

      {/* Background blur */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Menu Drawer */}
      <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-4 animate-slide">

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Content from parent */}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};
