import register from "./assets/register.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password) 
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div class="bg-[#FAFAFA] flex relative p-20 justify-around">
      <div class="flex flex-col justify-center align-center">
        <h1 class="text-4xl font-black mb-5">join think'n</h1>
        <h3 class="mb-5 w-30 font-thin">
          a comprehensive platform for students and
          <br /> teachers to inquire, discover, and create.
        </h3>

        <form onSubmit={handleSubmit} action="#" id="form" class="w-500">
          <div>
            <input
              type="text"
              name="name"
              class="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              placeholder="name"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="email"
              require
              class="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <span id="text"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="re-enter password"
              require
              class="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
            />
            <span id="text"></span>
          </div>

          <a href="#" id="thanksbutn">
            <p class="font-sm bg-[#0051ED] h-10 flex justify-center items-center mt-3 border-none rounded-md text-white no-underline p-2">
              register
            </p>
          </a>
        </form>
      </div>
      <div class="flex justify-center items-center">
        <img src={register} class="h-80"></img>
      </div>
    </div>
  );
}

export default Register;
