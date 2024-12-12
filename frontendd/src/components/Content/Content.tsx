import React, { PropsWithChildren } from 'react';
import { HeaderLink } from '../../types';
import * as Styled from './Content.styled';
import { Link } from '../Link';
import { useNavigate } from 'react-router-dom';

type ContentProps = {
  title?: string;
  links?: HeaderLink[];
};

export const Content = ({ title, links, children }: PropsWithChildren<ContentProps>) => {
  const navigator = useNavigate();
  return (
    <Styled.Container>
      <Styled.FormContainer>
        {!!title && <Styled.Title>{title}</Styled.Title>}
        {children}
      </Styled.FormContainer>
      {!!links?.length && <Styled.Links>
        {links.map(({ title, path }) => <Link key={title} title={title} onClick={()=>{navigator(path)}}/>)}
      </Styled.Links>}
    </Styled.Container>
  );
};
