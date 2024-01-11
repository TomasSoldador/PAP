import * as Components from "./styled"; 
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from 'react-icons/fa';
import LOGO from "../../assets/logo.png"

//TODO: meter a logo

const Sidebar = ({userId}) => {
  return (
      <Components.SidebarContainer>
        <img src="" alt="" />
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

      </Components.SidebarContainer>
  );
}

export default Sidebar;
