import register from "./assets/register.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/home ')
    } catch (e) {
      setError(true);
      console.log(e.message);
    }
  };
  return (
    <div className="bg-[#FAFAFA] flex relative p-20 justify-around">
      <div className="flex flex-col justify-center align-center">
        <h1 className="text-4xl font-black mb-5">join think'n</h1>
        <h3 className="mb-5 w-30 font-thin">
          a comprehensive platform for students and
          <br /> teachers to inquire, discover, and create.
        </h3>

        <form onSubmit={handleSubmit} action="#" id="form" className="w-500">
          <div>
            <input
              type="text"
              name="name"
              className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              placeholder="name"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="email"
              required
              className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span id="text"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              required
              className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span id="text"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="re-enter password"
              className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
              autoComplete="off"
            />
            <span id="text"></span>
          </div>

          <button className="font-sm bg-[#0051ED] h-10 flex justify-center items-center mt-3 border-none rounded-md text-white no-underline p-2">
            register
          </button>
          {error && <h2 class="mt-3">Email already in use, please <Link to="/login" class="text-[#0051ED]">log in</Link></h2>}
        </form>
      </div>
      <div className="flex justify-center items-center">
        <img src={register} className="h-80"></img>
      </div>
    </div>
  );
}

export default Register;
