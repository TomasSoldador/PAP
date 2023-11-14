import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registar from "./pages/Registar";
import PasswordReset from "./pages/PasswordReset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registar" element={<Registar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
    </Routes>
  </Router>
);