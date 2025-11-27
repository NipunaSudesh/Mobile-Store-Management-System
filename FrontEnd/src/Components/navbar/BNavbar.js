import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const BNavBar = ({ mobile = false, onClose = () => {} }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const location = useLocation(); // ⭐ detect active route

  useEffect(() => {
    const getUser = async () => {
      if (!token) return;
      try {
        const res = await axios.get("http://localhost:5000/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.role === "admin") setIsAdmin(true);
      } catch {}
    };
    getUser();
  }, [token]);

  const goTo = (path) => {
    navigate(path);
    if (mobile) onClose();
  };

  const classes = mobile
    ? "flex flex-col gap-4 bg-white p-4"
    : "flex justify-center gap-6 py-2 bg-gray-200 shadow-md";

  const activeStyle = (path) =>
    location.pathname === path ? "text-red-600  underline" : "text-gray-800";

  return (
    <ul className={classes}>
      <li>
        <button className={activeStyle("/")} onClick={() => goTo("/")}>
          Home
        </button>
      </li>

      <li>
        <button className={activeStyle("/brandname")} onClick={() => goTo("/brandname")}>
          Brand
        </button>
      </li>

      <li>
        <button className={activeStyle("/latestmobile")} onClick={() => goTo("/latestmobile")}>
          Latest Mobile
        </button>
      </li>

      <li>
        <button className={activeStyle("/featuredmobile")} onClick={() => goTo("/featuredmobile")}>
          Featured Mobile
        </button>
      </li>

      <li>
        <button className={activeStyle("/contactus")} onClick={() => goTo("/contactus")}>
          Contact Us
        </button>
      </li>

      {isAdmin && (
        <li>
          <button
            className={activeStyle("/adminpanel")}
            onClick={() => goTo("/adminpanel")}
          >
            Admin Panel
          </button>
        </li>
      )}
    </ul>
  );
};
