import React from 'react'
import * as CgIcons from "react-icons/cg";
import * as HiIcons from "react-icons/hi";

const sidebar = () => {
  return (
    <div className="w-1/6">
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
              className="rounded-xl pl-8 text-search"
            />
          </div>
        </form>
      </div>
      <div>
        <p className="text-[#7e7e7e] mt-2 px-5">menu</p>
        <div className="flex pl-5 items-center h-10 bg-[#E5EDFD]  my-1 w-full">
          <HiIcons.HiMenu />
          <h1 className="px-5">questions</h1>
        </div>
      </div>

      <div className="flex pl-5 items-center h-10 bg-[#E5EDFD] my-2">
        <HiIcons.HiMenu />
        <h1 className="px-5">tags</h1>
      </div>
    </div>
  );
}

export default sidebar


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