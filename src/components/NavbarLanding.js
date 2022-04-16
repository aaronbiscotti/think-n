import React from 'react';
import Logo from "./assets/logo.svg";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <>
      <nav class="h-25 shadow pl-5 p-3 pr-5 flex justify-between items-center">
      <Link to="/" class="flex justify-center items-center">
        <div class="flex">
            <img src={Logo} />
          <h1 class="p-3 pl-2">
            <span class="font-bold">think</span>'n
          </h1>
        </div>
      </Link>

        <div class="flex">
          <div class="flex justify-center align-center pl-2 pr-2 rounded-lg text-white mx-1 bg-[#0051ED]">
            <Link to="/register">
              <button class="flex justify-center items-center h-10 p-3 text-sm font-bold">
                <HiIcons.HiOutlineUserAdd class="h-4" />
                <p>&nbsp;&nbsp;Register</p>
              </button>
            </Link>
          </div>
          <div class="flex justify-center align-center pl-2 pr-2 rounded-lg text-white mx-1 bg-[#EAEAEA]">
            <Link to="/login">
            <button class="flex justify-center items-center h-10 p-3 text-sm font-bold">
              <p class="text-[#0051ED]">Login</p>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLanding