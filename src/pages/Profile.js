import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import { getName } from "./Register.js";
import { getAuth, updateProfile } from 'firebase/auth';
const Profile = () => {
    const { user, logout } = UserAuth();
    const auth = getAuth();
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
    <div>
        <p>name: Aviel Hernandez {user && user.displayName}</p>
        <p>user email: {user && user.email}</p>
        <button onClick={handleLogout} className="p-1 text-[#fff] mt-2 bg-[#0051ED] rounded">logout</button>
    </div>
  )
}

export default Profile