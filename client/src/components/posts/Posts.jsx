import React, { useEffect, useState } from "react";
import * as Components from "./styled";
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Axios from "axios";

const Post = ({ posts }) => {
  
  const [coracao, setCoracao] = useState(false);
  const [dataPerfil, setDataPerfil] = useState([]);
  const [likes, setLikes] = useState(posts.Likes || 0); 
  const idperfil = posts.perfil_id

  const handleLike = async () => {
    setCoracao(!coracao);
  };
  
  

  useEffect(() => {
    const fetchUserData = async () => {
      if (idperfil) {
        try {
          // Assegure-se de que a URL esteja correta e corresponda ao endpoint do servidor
          const response = await Axios.post("http://localhost:3001/api/posts/getPerfil", { idperfil });
          setDataPerfil(response.data); 
        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };
    
    fetchUserData();
  }, [idperfil]);
  

  return (
    <Components.PostContainer>
      <Components.UserProfile>
        <Components.ProfileImage
          src={`http://localhost:3001/server/imagens/${dataPerfil[0]?.imageUrl || "../../assets/transferir.jpeg"}`}

          alt={`${dataPerfil[0]?.imageUrl}'s profile`}
        />
        <Components.UserName>{dataPerfil[0]?.username}</Components.UserName>
      </Components.UserProfile>
      <Components.Photo>
        <Carousel showThumbs={false} showStatus={false} style={{ zIndex: '1' }} dynamicHeight={false}>
          {Object.values(posts).map((value, index) => {
            if (
              typeof value === "string" &&
              value.match(/\.(jpeg|jpg|gif|png)$/)
            ) {
              return (
                <div key={index}>
                  <Components.Img
                    src={`http://localhost:3001/server/imagesPosts/` + value}
                    alt={`Post Image ${index + 1}`}
                  />
                </div>
              );
            }
            return null; // Handle other cases where value is not a valid image URL
          }).filter(Boolean)}
        </Carousel>
      </Components.Photo>
      <Components.LikeCommentSection>
        <Components.IconButton onClick={handleLike}>
          {coracao ? <FaHeart /> : <FaRegHeart />}
          <span></span>
        </Components.IconButton>
        <Components.IconButton>
          <FaComment />
        </Components.IconButton>
      </Components.LikeCommentSection>
    </Components.PostContainer>
  );
};

export default Post;