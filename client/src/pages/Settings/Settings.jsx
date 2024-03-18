import React from 'react';
import * as Components from "./styled"
import Sidebar from "../../components/Sidebar/Sidebar";



const Settings = () => {
  return (
    <Components.LayoutContainer>
        <Sidebar />
        <Components.ContentContainer>
          <h1>settings</h1>
        </Components.ContentContainer>
      </Components.LayoutContainer>
  );
};

export default Settings;