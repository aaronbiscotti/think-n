import React from "react";
import * as CgIcons from "react-icons/cg";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
// import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as VsIcons from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="w-full flex flex-col bg-white h-screen overflow-hidden z-10 justify-between">
      <div id="top">
        <div class="mt-4 px-3">
          <form
            action="/"
            method="get"
            className="flex items-center h-10 text-xl"
          >
            <div class="relative mb-5">
              <div class="absolute inset-y-0  left-0 flex items-center pl-2 pointer-events-none">
                <CgIcons.CgSearch />
              </div>
              <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                className="rounded-xl pl-8 w-full text-search"
              />
            </div>
          </form>
        </div>
        <div>
          <p className="text-[#7e7e7e] mt-2 px-4">menu</p>
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-10 bg-[#E5EDFD] my-1 w-full border-l-4 border-[#0051ED] ease duration-200"
                : "flex items-center h-10  my-1 w-full ease duration-200"
            }
          >
            <button className="flex items-center h-10 my-1 w-full">
              <HiIcons.HiMenu className="ml-4" />
              <h1 className="px-5">questions</h1>
            </button>
          </NavLink>
        </div>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 bg-[#E5EDFD] my-1 w-full border-l-4 border-[#0051ED] ease duration-200"
              : "flex items-center h-10  my-1 w-full ease duration-200"
          }
        >
          <button className="flex pl-5 items-center h-10 my-2 w-full">
            <AiIcons.AiOutlineFire />
            <h1 className="px-5">trending</h1>
          </button>
        </NavLink>
      </div>
      <p className="text-[#7e7e7e] mt-4 px-5">personal navigator</p>
      <button className="flex pl-5 items-center h-10 my-2 w-full">
        <BsIcons.BsQuestionCircle />
        <h1 className="px-5">your questions</h1>
      </button>
      <button className="flex pl-5 items-center h-10 my-2 w-full">
        <FaIcons.FaRegComment />
        <h1 className="px-5">your answers</h1>
      </button>
      <button className="flex pl-5 items-center h-10 my-2 w-full">
        <AiIcons.AiOutlineHeart />
        <h1 className="px-5">liked posts</h1>
      </button>
      {/* This is the personal navigator section in the side bar, removed because it is too many pages */}
      <div className="space-x-10 flex justify-center">
        <button className="">
          <VsIcons.VscGithubAlt className="text-4xl bottom-0 mb-2" />
        </button>
        <button className="">
          <FaIcons.FaInstagram className="text-4xl bottom-0 mb-2" />
        </button>
      </div>
    </div>
  );
};

export default sidebar;

//  <form onSubmit={handleSubmit} action="#" id="form" className="w-500">
//           <div>
//             <input
//               type="text"
//               placeholder="email"
//               required
//               className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
//               autoComplete="off"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span id="text"></span>
//           </div>
//   </form>
