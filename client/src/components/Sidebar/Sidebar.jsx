import * as Components from "./styled";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaEllipsisH,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";

import LOGO from "../../assets/logo2.png";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { Modal } from "../Modal_Pub/Modal";

const Sidebar = ({ userId, foto }) => {

  const [showModal, setShowModal] = useState(false);

  const fotoURL = `http://localhost:3001/server/imagens/` + foto;
  const navigate  = useNavigate();

  const handleLogout = () => {
    Cookies.remove('authToken');
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Components.SidebarContainer>
      <Components.SidebarTopImage onClick={() => handleNavigation('/')}>
        <img src={LOGO} alt="Imagem no topo da Sidebar" />
      </Components.SidebarTopImage>
      <Components.SidebarItem onClick={() => handleNavigation('/')}>
        <FaHome />
        <span className="text">Home</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => setShowModal(true)}>
        <FaPlus />
        <span className="text">Criar</span>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Explorer')}>
        <FaHashtag />
        <span className="text">Explorar</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Notifications')}>
        <FaBell />
        <span className="text">Notificações</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Messages')}>
        <FaEnvelope />
        <span className="text">Mensagens</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Shop')}>
        <FaBookmark />
        <span className="text">Loja</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/More')}>
        <FaEllipsisH />
        <span className="text">Mais</span>
      </Components.SidebarItem>
      <Components.ProfileButton onClick={() => handleNavigation('/Profile')}>
        <div className="profile-pic">
          <img
            src={fotoURL || "../../src/assets/transferir.jpeg"}
            alt="Perfil"
          />
        </div>
        <span className="username">{userId}</span>
      </Components.ProfileButton>
      <Components.LogoutButton onClick={handleLogout}>
        <FaSignOutAlt />
        <span className="logout-text">Logout</span>
      </Components.LogoutButton>
    </Components.SidebarContainer>
  );
};

export default Sidebar;
