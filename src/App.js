import './App.css';
import NavbarLanding from "./components/NavbarLanding"
import Register from "./pages/Register.js"
import Login from "./pages/Login.js"
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavbarLanding />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
