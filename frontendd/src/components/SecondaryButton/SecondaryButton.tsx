import React from 'react';
import * as Styled from './SecondaryButton.styled';

type SecondaryButtonProps = {
  title: string;
  onClick?: () => void;
};

export const SecondaryButton = ({ title, onClick = () => undefined }: SecondaryButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>{title}</Styled.Button>
  );
};
