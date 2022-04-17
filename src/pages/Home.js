import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import { UserAuth } from "../context/AuthContext";
import Sidebar from "../components/sidebar"


const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <>
      <NavbarLoggedIn />
      <Sidebar />
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home