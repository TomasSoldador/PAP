import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10001; /* Set a higher z-index value */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;