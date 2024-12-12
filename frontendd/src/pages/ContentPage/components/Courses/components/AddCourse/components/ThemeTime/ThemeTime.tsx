import React from 'react';
import * as Styled from './ThemeTime.styled';

type ThemeTimeProps = {
  time: string;
};

export const ThemeTime = ({ time }: ThemeTimeProps) => {
  return (
    <Styled.Container>
      <div>{time}</div>
      <Styled.EditIcon />
    </Styled.Container>
  );
};
