import React, { useState } from "react";
import login from "./assets/login.svg";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import NavbarLanding from "../components/NavbarLanding";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError(true)
    }
  };

  return (
    <>
      <div className="bg-[#FAFAFA] flex relative h-full p-20 justify-around">
        <div className="flex flex-col justify-center align-center">
          <h1 className="text-4xl font-black mb-5">we've missed you!</h1>
          <h3 className="mb-5 w-30 font-thin">
            your fellow peers are waiting for your analytical input!
          </h3>

          <form onSubmit={handleSubmit} action="#" id="form" className="w-500">
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
            {error && <h2 class="mt-3">email or password invalid!</h2>}
            <button className="font-sm bg-[#0051ED] h-10 flex justify-center items-center mt-3 border-none rounded-md text-white no-underline p-2">
              login
            </button>
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
        <div className="flex justify-center items-center">
          <img src={login} className="h-80"></img>
        </div>
      </div>
    </>
  );
};

export default Login;
