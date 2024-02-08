import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 20px;
  background: #15202B;
`;

export const UserProfile = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;

export const UserName = styled.span`
  color: white;
  font-weight: bold;
  margin-left: 10px;
`;

export const Photo = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InteractionSection = styled.div`
  padding: 10px;
`;

export const LikeCommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid #dbdbdb;
`;

export const IconButton = styled.button`
  background: none;
  color: white !important;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;