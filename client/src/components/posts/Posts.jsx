import React, { useState } from 'react';
import * as Components from "./styled";
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa";



const Post = ({ userName, photoUrl, children }) => {

  const fotoPerfil = `http://localhost:3001/server/imagens/` + photoUrl
  const [coracao, setCoracao] = useState(true)

  const handleLike = () => {
    setCoracao(!coracao);
  };

  


  return (
    <Components.PostContainer>
      <Components.UserProfile>
        <Components.ProfileImage src={fotoPerfil || "../../assets/transferir.jpeg"} alt={`${userName}'s profile`} />
        <Components.UserName>{userName}</Components.UserName>
      </Components.UserProfile>
      <Components.Photo>
        <img src={fotoPerfil || "https://via.placeholder.com/500x500"} alt="Post" style={{ width: '100%', height: 'auto' }} />
      </Components.Photo>
      <Components.LikeCommentSection>
        <Components.IconButton onClick={handleLike}>
          {coracao ? <FaHeart /> : <FaRegHeart />} 
        </Components.IconButton>

        <FaComment/>
        
      </Components.LikeCommentSection>
    </Components.PostContainer>
  );
};

export default Post;
