import { Container } from '@src/components/Container';
import React from 'react';
import * as Styled from './Export.styled';
import { PrimarySelect } from '@src/components/PrimarySelect';
import { DatePicker } from '@src/components/DatePicker';
import { SecondaryButton } from '@src/components/SecondaryButton';
import { PrimaryButton } from '@src/components/PrimaryButton';

export const Export = () => {
  const handleChangeSelect = (value: unknown) => {
    console.log(`selected ${value}`);
  };

  return (
    <Container>
      <Styled.FormContainer>
        <Styled.FormContent>
          <Styled.FormRow>
            <Styled.FormLabel>Название курса:</Styled.FormLabel>
            <PrimarySelect
              options={[
                { value: 'python', label: 'Python' },
                { value: 'frontend', label: 'Frontend' },
              ]}
              onChange={handleChangeSelect}
              placeholder='Выберите название курса'
            />
          </Styled.FormRow>

          <Styled.FormRow>
            <Styled.FormLabel>Дата начала экспорта:</Styled.FormLabel>
            <DatePicker multiple />
          </Styled.FormRow>

          <Styled.FormRow>
            <Styled.FormLabel>Дата конца экспорта:</Styled.FormLabel>
            <DatePicker multiple />
          </Styled.FormRow>

          <Styled.ButtonWrapper>
            <SecondaryButton title='Выбрать все даты' />
          </Styled.ButtonWrapper>

          <Styled.FormRow>
            <Styled.FormLabel>ФИО студента:</Styled.FormLabel>
            <PrimarySelect
              options={[
                { value: 'value1', label: 'Иванов Иван Иванович' },
                { value: 'value2', label: 'Петров Петр Петрович' },
              ]}
              onChange={handleChangeSelect}
              placeholder='Выберите фио студента'
            />
          </Styled.FormRow>

          <Styled.FormRow>
            <Styled.FormLabel>Тип данных:</Styled.FormLabel>
            <PrimarySelect
              options={[
                { value: 'value1', label: 'Тип данных 1' },
                { value: 'value2', label: 'Тип данных 2' },
              ]}
              onChange={handleChangeSelect}
              placeholder='Выберите тип данных'
            />
          </Styled.FormRow>
        </Styled.FormContent>

        <PrimaryButton title='Экспортировать' />
      </Styled.FormContainer>
    </Container>
  );
};
