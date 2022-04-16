import React from 'react';
import Logo from "./assets/logo.svg";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <>
      <nav className="h-25 shadow pl-5 p-3 pr-5 flex justify-between items-center">
      <Link to="/" className="flex justify-center items-center">
        <div className="flex">
            <img src={Logo} />
          <h1 className="p-3 pl-2">
            <span className="font-bold">think</span>'n
          </h1>
        </div>
      </Link>

        <div className="flex">
          <div className="flex justify-center align-center pl-2 pr-2 rounded-lg text-white mx-1 bg-[#0051ED]">
            <Link to="/register">
              <button className="flex justify-center items-center h-10 p-3 text-sm font-bold">
                <HiIcons.HiOutlineUserAdd className="h-4" />
                <p>&nbsp;&nbsp;register</p>
              </button>
            </Link>
          </div>
          <div className="flex justify-center align-center pl-2 pr-2 rounded-lg text-white mx-1 bg-[#EAEAEA]">
            <Link to="/login">
            <button className="flex justify-center items-center h-10 p-3 text-sm font-bold">
              <p className="text-[#0051ED]">login</p>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLanding