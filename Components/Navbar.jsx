"use client"
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import logo from '/assets/Images/logo.jpg';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const NavBarItem = ({ title, classProps }) => (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      <a href={`/#${title}`}>{title}</a>
    </li>
  );
  return (
    <nav
      className="w-full flex md:justify-center justify-between items-center p-4 "
      id="Home"
    >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">

        <a href={"/"} title="Ali Akkuş Portfolio">
          <Image
            src={logo}
            alt="Ali Akkuş Portfolio"
            className="w-[55px] cursor-pointer"

          />
        </a>
      </div>
      {/* Navbar İtemleri */}
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "Skills", "About Us", "My Project", "Blog"].map(
          (item, index) => (
            <NavBarItem key={item + index} title={item} />
          )
        )}
        {/* Login */}
        <li className="bg-[#2952e3] py-2 px-7 mx-4  rounded-full cursor-pointer hover:bg-[#2546bd]">
          <a href="https://github.com/xaliiakkus" target="_blank">
            Go My Githup
          </a>
        </li>
      </ul>
      {/* Mobil Menü  */}
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          // Panel menü açılma ekranı
          <ul
            className="z-10 fixed top-0 - right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none 
               flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
               "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Home", "Skills", "About Us", "My Project", "Blog"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
