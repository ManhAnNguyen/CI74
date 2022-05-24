import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: translateY(-1000px)
  }

  to {
    transform: translateY(0px)
  }
`;

export const SModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-wrapper {
    background-color: white;
    border-radius: 10px;
    padding: 10px 20px;
    width: 100%;
    max-width: 500px;
    animation: ${rotate} 0.2s linear;
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
