import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "../../components/posts/Posts";



function Home () {


  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        <Posts />
        <Posts />
        <Posts />
      </Components.ContentContainer>
    </Components.LayoutContainer>
  )
}

export default Home;
