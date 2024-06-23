// src/Navbar.js
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-red-600 text-2xl font-bold">NETFLIX</div>
        <a href="/home" className="hover:text-gray-400">
          Home
        </a>
        <a href="/my-list" className="hover:text-gray-400">
          My List
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <IoSearchSharp />
        <div className="relative">
          <HiOutlineBell />
        </div>
        <div className="bg-gray-500 w-6 h-6 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
