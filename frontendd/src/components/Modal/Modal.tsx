import React from 'react';
import { ModalOverlay, ModalContent } from './Modal.styled';
interface ModalProps {
    isActive: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
  }  
export const Modal: React.FC<ModalProps> = ({ isActive, setActive, children }) => {
    return (
      <ModalOverlay 
        className={isActive ? 'active' : ''} 
        onClick={() => setActive(false)}
      >
        <ModalContent 
          className={isActive ? 'active' : ''} 
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalContent>
      </ModalOverlay>
    );
  };