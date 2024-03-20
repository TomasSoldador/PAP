import React, { useRef, useState } from "react";
import * as Components from "./styled";
import { Error } from "../../components/Alertas";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';



function Modal ({ showModal, setShowModal }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);
  const [nextPage, setNextPage] = useState(false);
  const [openError, setOpenError] = useState(false);
  const token = Cookies.get('authToken');
  const navigate  = useNavigate();

  const handleClose = () => {
    navigate(-1)
    setShowModal(false);
    setImages([]);
    setCurrentImageIndex(0);
    setDescription("");
  };

  const removeCurrentImage = () => {
    const newImages = [...images];
    newImages.splice(currentImageIndex, 1);
    setImages(newImages);
    if (currentImageIndex >= newImages.length && newImages.length > 0) {
      setCurrentImageIndex(newImages.length - 1);
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));

    if (images.length + newImages.length > 4) {
      setOpenError(true);
      setTimeout(() => {
        setOpenError(false);
      }, 3000);
      return;
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
    fileInputRef.current.value = "";
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
  
    if (images.length + files.length > 4) {
      setOpenError(true);
      setTimeout(() => {
        setOpenError(false);
      }, 3000);
      return;
    }
  
    setImages((prevImages) => [...prevImages, ...files]);
    event.target.value = "";
  };
  

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const voltar = () => {
    setNextPage(false);
    setImages([]);
  };

  const publicar = async () => {
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append('images', image);
      });
      formData.append('descricao', description);
      
      console.log(formData);
  
      const response = await axios.post('http://localhost:3001/api/posts/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log(response.data);
      navigate(-1);
      setImages([]);
      setDescription('');
      setNextPage(false);
      setShowModal(false);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <Components.ModalBackdrop>
      {openError && (
        <Error texto={"So pode inserir no maximo 4 imagens"} mostrar={true} />
      )}
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        {images.length > 0 && <Components.BackBottum onClick={voltar} />}
        <Components.CloseButton onClick={handleClose}>
          &times;
        </Components.CloseButton>
        <Components.TitleDiv>Criar Publicação nova</Components.TitleDiv>
        {images.length === 0 && (
          <Components.Dropzone
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Components.svg>
              <svg
                aria-label="Ícone para representar conteúdos multimédia tais como imagens ou vídeos"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="77"
                role="img"
                viewBox="0 0 97.6 77.3"
                width="96"
              >
                <title>
                  Ícone para representar conteúdos multimédia tais como imagens
                  ou vídeos
                </title>
                <path
                  d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                  fill="currentColor"
                ></path>
                <path
                  d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                  fill="currentColor"
                ></path>
                <path
                  d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </Components.svg>
            Arrasta fotos para aqui
            <Components.Button onClick={() => fileInputRef.current.click()}>
              {" "}
              Selecionar do Computador{" "}
            </Components.Button>
            <input
              type="file"
              name="images"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
              multiple
            />
          </Components.Dropzone>
        )}
        {images.length > 0 &&
          (nextPage ? (
            <Components.ContentContainer>
              <Components.FlexContainer>
                
              <Components.GridContainer>
                {images.map((file, index) => (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Imagem ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Components.GridContainer>

                <Components.footer>
                  <Components.NextButton onClick={() => publicar()}>
                    {" "}
                    Publicar{" "}
                  </Components.NextButton>
                </Components.footer>
              </Components.FlexContainer>

              <Components.DescriptionInput
                type="text"
                placeholder="Escreva uma descrição..."
                value={description}
                onChange={handleDescriptionChange}
              />
            </Components.ContentContainer>
          ) : (
            <Components.CarouselContainer>
              <Components.CarouselImage
                src={URL.createObjectURL(images[currentImageIndex])}
                alt={`Imagem ${currentImageIndex + 1}`}
              />
              <Components.RemoveImageIcon onClick={removeCurrentImage} />
              {images.length > 1 && (
                <>
                  <Components.NavigationButtonLeft onClick={handlePrevImage}>
                    &lt;
                  </Components.NavigationButtonLeft>
                  <Components.NavigationButtonRight onClick={handleNextImage}>
                    &gt;
                  </Components.NavigationButtonRight>
                </>
              )}
              <Components.footer>
                <Components.NextButton onClick={() => setNextPage(true)}>
                  {" "}
                  Seguinte{" "}
                </Components.NextButton>
              </Components.footer>
            </Components.CarouselContainer>
          ))}
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
};

export default Modal;