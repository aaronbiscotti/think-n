import React from "react";
import Logo from "./assets/logo.svg";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io5";

import { Link } from "react-router-dom";

const NavbarLoggedIn = () => {
  return (
    <>
      <nav className="h-25 pl-5 p-3 pr-5 flex justify-between items-center bg-white">
        <Link to="/home" className="flex justify-center items-center">
          <div className="flex">
            <img src={Logo} />
            <h1 className="p-3 pl-2">
              <span className="font-bold">think</span>'n
            </h1>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex justify-center align-center pl-2 pr-2 rounded-lg text-white mx-1 bg-[#0051ED]">
            <Link to="/post">
              <button className="flex justify-center items-center h-10 p-3 text-sm font-bold">
                <IoIcons.IoAddCircleOutline
                  className="h-4 #fff"
                  stroke="#fff"
                />
                <p>&nbsp;&nbsp;add a question</p>
              </button>
            </Link>
          </div>
          <Link to="#">
            <MdIcons.MdOutlineNotificationsNone className="text-3xl" />
          </Link>
          <Link to="/profile">
            <div className=" text-3xl pr-2 rounded-lg">
                <CgIcons.CgProfile />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarLoggedIn
