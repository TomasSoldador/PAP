// Modal.js
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as Components from "./styled";

export const Modal = ({ showModal, setShowModal }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const removeCurrentImage = () => {
    const newImages = [...images];
    newImages.splice(currentImageIndex, 1);
    setImages(newImages);
    // Ajusta o índice atual se a imagem removida era a última da lista
    if (currentImageIndex >= newImages.length && newImages.length > 0) {
      setCurrentImageIndex(newImages.length - 1);
    }
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    fileInputRef.current.value = "";
  };

  const handleCarouselNavigation = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setImages([]);
    setCurrentImageIndex(0);
    setDescription("");
  };

  return (
    <Components.ModalBackdrop show={showModal}>
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        <Components.CloseButton onClick={handleClose}>
          &times;
        </Components.CloseButton>
        <h2>Carregar Imagem</h2>
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
        {images.length > 0 && (
          <Components.CarouselContainer>
            <Components.CarouselImage
              src={images[currentImageIndex]}
              alt={`Imagem ${currentImageIndex + 1}`}
            />
            {images.length > 1 && (
              <>
                <Components.CarouselButton
                  data-direction="prev"
                  onClick={() => handleCarouselNavigation("prev")}
                >
                  <FaChevronLeft />
                </Components.CarouselButton>
                <Components.CarouselButton
                  data-direction="next"
                  onClick={() => handleCarouselNavigation("next")}
                >
                  <FaChevronRight />
                </Components.CarouselButton>
              </>
            )}
            <Components.RemoveImageIcon onClick={removeCurrentImage} />
          </Components.CarouselContainer>
        )}
        <Components.DescriptionField
          placeholder="Adicione uma descrição..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
};
