"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState("translate-x-[-100%]");

  const openNav = () => {
    setOpen("translate-x-[0%]");
  };

  const closeNav = () => {
    setOpen("translate-x-[-100%]");
  };

  return (
    <div className="w-full h-16 border-b bg-purple-600 text-white">
      <div className="flex justify-between items-center max-w-screen-2xl h-full m-auto px-6">
        <div className="flex items-center gap-2">
          <p onClick={openNav} className="block sm:hidden text-2xl">
            <FaBars />
          </p>
          <h2 className="font-black text-3xl">Brand</h2>
        </div>
        <nav className="hidden sm:flex list-none gap-4">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">Content</li>
          <li className="font-semibold">Feedback</li>
        </nav>
      </div>

      {/* sideNav for mobile view */}
      <div
        className={`${open} sm:hidden block w-[70vw] h-screen bg-purple-200 absolute top-0 px-4 py-6 transition-transform duration-300 transform`}
      >
        <header className="flex justify-end">
          <p onClick={closeNav} className="text-black text-2xl">
            <IoCloseSharp />
          </p>
        </header>
        <nav className="text-black list-none leading-9 w-fit m-auto mt-6">
          <li>Home</li>
          <li>Content</li>
          <li>Feedback</li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
