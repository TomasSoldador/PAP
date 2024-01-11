import * as Components from "./styled"; 
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaSignOutAlt  } from 'react-icons/fa';
import LOGO from "../../assets/logo2.png"

//TODO: meter a logo

const Sidebar = ({userId}) => {
  return (
      <Components.SidebarContainer>
        <Components.SidebarTopImage>
          <img src={LOGO} alt="Imagem no topo da Sidebar" />
        </Components.SidebarTopImage>
        <Components.SidebarItem>
          <FaHome />
          <span className="text">Home</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaHashtag />
          <span className="text">Explore</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaBell />
          <span className="text">Notifications</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaEnvelope />
          <span className="text">Messages</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaBookmark />
          <span className="text">Bookmarks</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaList />
          <span className="text">Lists</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaUser />
          <span className="text">Profile</span>
        </Components.SidebarItem>
        <Components.SidebarItem>
          <FaEllipsisH/>
          <span className="text">More</span>
        </Components.SidebarItem>
        <Components.ProfileButton>
          <div className="profile-pic">
            <img src="link_da_imagem_de_perfil.jpg" alt="Perfil" />
          </div>
          <span className="username">{userId}</span>
        </Components.ProfileButton>
        <Components.LogoutButton>
          <FaSignOutAlt />
          <span>Logout</span>
        </Components.LogoutButton>

      </Components.SidebarContainer>
  );
}

export default Sidebar;
