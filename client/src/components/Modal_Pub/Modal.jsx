import React, {useRef, useState} from 'react'
import * as Components from "./styled";


export const Modal = ({ showModal, setShowModal }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const handleClose = () => {
    setShowModal(false);
    setImages([]);
    setCurrentImageIndex(0);
    setDescription("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    fileInputRef.current.value = "";
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    event.target.value = "";
  };


  
  return (
    <Components.ModalBackdrop show={showModal}>
      <Components.CloseButton onClick={handleClose}>&times;</Components.CloseButton>
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        <Components.TitleDiv>Criar Publicação nova</Components.TitleDiv>
        <Components.Dropzone
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          Arraste ou clique aqui para inserir a imagem
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
            accept="image/*"
            multiple
          />
        </Components.Dropzone>
          

      </Components.ModalContent>
    </Components.ModalBackdrop>
  )
}