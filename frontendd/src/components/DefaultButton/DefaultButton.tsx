import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './DefaultButton.styled';

type DefaultButtonProps = {
  title: string;
};

export const DefaultButton = ({ title }: ButtonHTMLAttributes<HTMLButtonElement> & DefaultButtonProps) => {
  return (
    <Styled.Button>{title}</Styled.Button>
  );
};
