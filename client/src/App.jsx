import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Registar from "./pages/Registar";
import PasswordReset from "./pages/PasswordReset";
import PrivateRoute from "./middleware/PrivateRoute";
import PassReset from "./pages/PassReset";
import Explorer from "./pages/Explorer/Explorer";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Shop from "./pages/Shop/Shop";
import Perfil from "./pages/Perfil/Perfil"


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registar" element={<PrivateRoute><Registar /></PrivateRoute>} />
      <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/resetpass" element={<PrivateRoute><PassReset /></PrivateRoute>} />
      <Route path="/Explorer" element={<PrivateRoute><Explorer /></PrivateRoute>} />
      <Route path="/Notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
      <Route path="/Messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
      <Route path="/Shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
      <Route path="/Perfil/:username" element={<PrivateRoute><Perfil /></PrivateRoute>} />
    </Routes>
  </Router>
);
