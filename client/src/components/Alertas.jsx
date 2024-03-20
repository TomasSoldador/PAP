import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Style = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const ToastConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const Error = ({texto, mostrar}) => {
  const notify = () => {
    toast.error(texto, Style);
  };

  useEffect(() => {
    if (mostrar) {
      notify();
    }
  }, [mostrar]);
  
  return <ToastContainer {...ToastConfig}/>
}

export const Success = ({texto, mostrar}) => {
  const notify = () => {
    toast.success(texto, Style);
  };

  useEffect(() => {
    if (mostrar) {
      notify();
    }
  }, [mostrar]);
  
  return <ToastContainer {...ToastConfig}/>
}




export const Aviso = ({texto, mostrar}) => {
  const notify = () => {
    toast.warn(texto, Style);
  };

  useEffect(() => {
    if (mostrar) {
      notify();
    }
  }, [mostrar]);

  return <ToastContainer {...ToastConfig}/>

}
