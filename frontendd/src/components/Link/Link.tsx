import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './Link.styled';

type LinkProps = {
  title: string;
};

export const Link = ({ title, ...props }:React.HTMLAttributes<HTMLElement> & LinkProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Styled.Text {...props}>{title}</Styled.Text>
  );
};
