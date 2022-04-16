import React from 'react'
import login from "./assets/login.svg"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div class="bg-[#FAFAFA] flex relative h-full p-20 justify-around">
      <div class="flex flex-col justify-center align-center">
        <h1 class="text-4xl font-black mb-5">join think'n</h1>
        <h3 class="mb-5 w-30 font-thin">
          a comprehensive platform for students and
          <br /> teachers to inquire, discover, and create.
        </h3>

        <form action="#" id="form" class="w-500">
          <div>
            <input
              type="text"
              placeholder="email"
              require
              class="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
            />
            <span id="text"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              require
              class="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
            />
            <span id="text"></span>
          </div>

          <a href="#" id="thanksbutn">
            <p class="font-sm bg-[#0051ED] h-10 flex justify-center items-center mt-3 border-none rounded-md text-white no-underline p-2">
              login
            </p>
          </a>
          <div>
            <h3 class="text-sm mt-1 ">
              don't have an account?{" "}
              <Link to="/register">
                <span class="text-[#0051ED]">sign up!</span>
              </Link>
            </h3>
          </div>
        </form>
      </div>
      <div class="flex justify-center items-center">
        <img src={login} class="h-80"></img>
      </div>
    </div>
  );
}

export default Login