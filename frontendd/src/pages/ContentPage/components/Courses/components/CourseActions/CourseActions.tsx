import React from 'react'
import * as Styled from './CourseActions.styled';
import { SecondaryButton } from '@src/components/SecondaryButton';

export const CourseActions = () => {
  return (
    <Styled.Container>
      <SecondaryButton title='Подробнее' />
      <SecondaryButton title='Редактировать' />
    </Styled.Container>
  );
};
