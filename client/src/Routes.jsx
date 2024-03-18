// AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";
import Registar from "./pages/RegisterPerfil/Registar";
import PasswordReset from "./pages/EmailForReset/PasswordReset";
import PrivateRoute from "./middleware/PrivateRoute";
import PassReset from "./pages/PasswordReset/PassReset";
import Explorer from "./pages/Explorer/Explorer";
import Shop from "./pages/Shop/Shop";
import Perfil from "./pages/Perfil/Perfil";
import Criar from "./pages/Criar/CriarPublicacao";
import CriarLoja from "./pages/CriarLoja/CriarLoja";
import Settings from "./pages/Settings/Settings";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registar" element={<PrivateRoute><Registar /></PrivateRoute>} />
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/resetpassword" element={<PasswordReset />} />
        <Route path="/resetpass" element={<PrivateRoute><PassReset /></PrivateRoute>} />
        <Route path="/Explorer" element={<PrivateRoute><Explorer /></PrivateRoute>} />
        <Route path="/Shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
        <Route path="/Perfil/:username" element={<PrivateRoute><Perfil /></PrivateRoute>} />
        <Route path="/Criar" element={<PrivateRoute><Criar /></PrivateRoute>} />
        <Route path="/CriarLoja" element={<PrivateRoute><CriarLoja /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
