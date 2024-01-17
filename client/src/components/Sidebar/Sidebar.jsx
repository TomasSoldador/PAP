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
      <Components.SidebarTopImage>
        <img src={LOGO} alt="Imagem no topo da Sidebar" />
      </Components.SidebarTopImage>
      <Components.SidebarItem onClick={() => handleNavigation('/home')}>
        <FaHome />
        <span className="text">Home</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Explore')}>
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
      <Components.SidebarItem onClick={() => handleNavigation('/Bookmarks')}>
        <FaBookmark />
        <span className="text">Bookmarks</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Lists')}>
        <FaList />
        <span className="text">Lists</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/Profile')}>
        <FaUser />
        <span className="text">Profile</span>
      </Components.SidebarItem>
      <Components.SidebarItem onClick={() => handleNavigation('/More')}>
        <FaEllipsisH />
        <span className="text">More</span>
      </Components.SidebarItem>
      <Components.ProfileButton>
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
