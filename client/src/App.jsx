import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registar from "./pages/Registar";
import PasswordReset from "./pages/PasswordReset";
import PrivateRoute from "./middleware/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registar" element={<Registar />} />
      <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/resetpassword" element={<PasswordReset />} />
    </Routes>
  </Router>
);
