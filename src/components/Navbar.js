import React from 'react';
import Logo from "./assets/logo.svg";
// import { IoPersonAddOutline } from "react-icons/im";

const Navbar = () => {
  return (
    <>
      <nav class="h-25 shadow pl-5 p-3 flex justify-between align-center">
        <div class="flex">
          <img src={Logo} />
          <h1 class="p-3 pl-2 "><span class="font-bold">think</span>'n</h1>
        </div>
        
        <div class="flex justify-center align-center">
          <button>Register</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar