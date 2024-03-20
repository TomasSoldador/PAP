import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled";
import Posts from "../../components/posts/Posts";
import { useNavigate } from 'react-router-dom';

function Home() {
  const token = Cookies.get("authToken");
  const navigate  = useNavigate();
  const [postsData, setPostsData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [loadingOverlay, setLoadingOverlay] = useState(true);
  const [loadingBottom, setLoadingBottom] = useState(false);

  useEffect(() => {
    const PesquisarPosts = async () => {
      try {
        const resposta = await Axios.get(
          `http://localhost:3001/api/posts/get?limit=${visiblePosts}&offset=${postsData.length}`
        );

        setTimeout(() => {
          setPostsData((prevPostsData) => [...prevPostsData, ...resposta.data]);
          setLoadingOverlay(false);
          setLoadingBottom(false);
        }, 1000);

        window.addEventListener("scroll", handleScroll);
      } catch (error) {
        console.error("Erro na requisição:", error);
        setLoadingOverlay(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
        setLoadingBottom(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    PesquisarPosts();
  }, [token, visiblePosts]);

  const criar = () => {
    navigate('/criar')
  }

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        {loadingOverlay && postsData.length === 0 && (
          <Components.LoadingOverlay>
            <Components.LoadingSpinner />
          </Components.LoadingOverlay>
        )}

        {postsData.length > 0 ? (
          <>
            {postsData.map((post, index) => (
              <Posts key={index} posts={post} />
            ))}
            {loadingBottom && (
              <Components.LoadingBotton>
                <Components.LoadingSpinner />
              </Components.LoadingBotton>
            )}
          </>
        ) : (
          !loadingOverlay && (
            <>
              <Components.Frase>
                <span>Ups! Ainda não há publicações no nosso site. Seja o primeiro!</span>
              </Components.Frase>
              <Components.ButtonNew onClick={criar}>
                <span>Adicionar</span>
              </Components.ButtonNew>
            </>
          )
        )}
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Home;
