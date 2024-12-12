import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './PrimaryButton.styled';

type PrimaryButtonProps = {
  title: string;
  isFullWidth?: boolean;
};

export const PrimaryButton = ({ title, isFullWidth, ...props }:React.HTMLAttributes<HTMLElement> & ButtonHTMLAttributes<HTMLButtonElement> & PrimaryButtonProps) => {
  return (
    <Styled.Button $isFullWidth={!!isFullWidth} {...props}>{title}</Styled.Button>
  );
};
