import React, { useState } from "react";
import * as Components from "./styled";
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Post = ({ data, userName, photoUrl, children }) => {
  const fotoPerfil = `http://localhost:3001/server/imagens/` + photoUrl;
  const [coracao, setCoracao] = useState(true);

  const handleLike = () => {
    setCoracao(!coracao);
  };

  return (
    <Components.PostContainer>
      <Components.UserProfile>
        <Components.ProfileImage
          src={fotoPerfil || "../../assets/transferir.jpeg"}
          alt={`${data.perfil_id}'s profile`}
        />
        <Components.UserName>{data.perfil_id}</Components.UserName>
      </Components.UserProfile>
      <Components.Photo>
        <Carousel showThumbs={false} showStatus={false} dynamicHeight={false}>
          {Object.values(data).map((value, index) => {
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
        </Components.IconButton>
        <FaComment />
      </Components.LikeCommentSection>
    </Components.PostContainer>
  );
};

export default Post;