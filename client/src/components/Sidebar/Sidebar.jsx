import * as Components from "./styled";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
  FaSignOutAlt,
} from "react-icons/fa";
import LOGO from "../../assets/logo2.png";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


//TODO: meter a logo

const Sidebar = ({ userId, foto }) => {
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
      <Components.SidebarItem onClick={() => handleNavigation('/Explorer')}>
        <FaHashtag />
        <span className="text">Explore</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Notifications')}>
        <FaBell />
        <span className="text">Notifications</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Messages')}>
        <FaEnvelope />
        <span className="text">Messages</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Shop')}>
        <FaBookmark />
        <span className="text">Loja</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/More')}>
        <FaEllipsisH />
        <span className="text">More</span>
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
