import './App.css';
import NavbarLanding from "./components/NavbarLanding"
import Register from "./pages/Register.js"
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavbarLanding />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
