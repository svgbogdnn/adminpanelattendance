import styled from 'styled-components';

export const ModalOverlay = styled.div`
height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`
;

export const ModalContent = styled.div `
padding: 20px;
  border-radius: 12px;
  background-color: #1b2431;
  transform: scale(0.5);
  transition: 0.4s all;
  width: 50vw;

  &.active {
    transform: scale(1);
  }
`
  
;