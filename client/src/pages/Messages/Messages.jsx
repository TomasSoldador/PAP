import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";



function Messages () {

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        <h1>Messages</h1>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  )
}

export default Messages;
