import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled";
import Posts from "../../components/posts/Posts";

function Home() {
  const token = Cookies.get("authToken");
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

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        {postsData.map((post, index) => (
          <Posts key={index} posts={post} />
        ))}
        {loadingOverlay && (
          <Components.LoadingOverlay>
            <Components.LoadingSpinner />
          </Components.LoadingOverlay>
        )}
        {loadingBottom && (
          <Components.LoadingBotton>
            <Components.LoadingSpinner />
          </Components.LoadingBotton>
        )}
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Home;
