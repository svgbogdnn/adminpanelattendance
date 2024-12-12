import { Container } from '@src/components/Container';
import React from 'react';
import * as Styled from './CourseInfo.styled';
import { SecondaryButton } from '@src/components/SecondaryButton';
import { PrimaryTable } from '@src/components/PrimaryTable';
import { columns, tableValues } from '../AddCourse/AddCourse.constants';

export const CourseInfo = () => {
  return (
    <Container>
      <Styled.Header>
        <Styled.Title>Название курса: PYTONPRO</Styled.Title>
        <Styled.Title>Пройдено тем: 7/10</Styled.Title>
      </Styled.Header>
      <Styled.Text>Расписание:</Styled.Text>
      <PrimaryTable data={tableValues} columns={columns} />
      <Styled.ButtonContainer>
        <SecondaryButton title='+ Добавить тему' />
      </Styled.ButtonContainer>
      <Styled.Materials>
        <Styled.Text>Материалы курса:</Styled.Text>
        <Styled.TextUnderline>ссылка</Styled.TextUnderline>
      </Styled.Materials>
    </Container>
  );
};
