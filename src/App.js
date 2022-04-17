import './App.css';
import NavbarLanding from "./components/NavbarLanding"
import NavbarLoggedIn from "./components/NavbarLoggedIn"
import Register from "./pages/Register.js"
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import Trending from "./pages/Trending.js"
import Questions from "./pages/Questions.js"
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import AddQuestions from './pages/AddQuestions';
import AuthProtectedRoute from './components/AuthProtectedRoute';
import Featured from './components/Featured';

function App() {
  const auth = getAuth();
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setNavbar(true);
        setSidebar(true);
      } else {
        setNavbar(false);
        setSidebar(false);
      }
    }); 
  })
  return (
      <AuthContextProvider>
        <Router>
          <div className="layout">
            <div className="header">
              {navbar ? <NavbarLoggedIn /> : <NavbarLanding />}
            </div>
            <div className="leftSide">
              {sidebar ? <Sidebar /> : null}
            </div>
            <div className="body">
              <Routes>
                <Route path="/" element={<AuthProtectedRoute><Register /></AuthProtectedRoute>} />
                <Route path="/register" element={<AuthProtectedRoute><Register /></AuthProtectedRoute>} />
                <Route path="/login" element={<AuthProtectedRoute><Login /></AuthProtectedRoute>} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/post" element={<AddQuestions />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              </Routes>
            </div>
            <div className="rightSide">
              <Featured />
            </div>
          </div>
        </Router>
      </AuthContextProvider>
  );
}

export default App;
