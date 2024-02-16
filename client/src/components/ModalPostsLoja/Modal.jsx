import React, { useRef, useState } from "react";
import * as Components from "./styled";
import { Error } from "../Alertas";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';



function Modal () {

  return (
    <Components.ModalBackdrop>
      <h1>ola</h1>
    </Components.ModalBackdrop>
  );
};

export default Modal;