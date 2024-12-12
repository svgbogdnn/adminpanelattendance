import { Container } from '@src/components/Container';
import React from 'react';
import { reviews } from './Feedback.constants';
import { Summary } from './components/Summary';
import { Review } from './components/Review';
import { DatePicker } from '@src/components/DatePicker';
import * as Styled from './Feedback.styled';
import { PrimarySelect } from '@src/components/PrimarySelect';
import { ButtonWithIcon } from '@src/components/ButtonWithIcon';
import { EIcon } from '@src/components/ButtonWithIcon/ButtonWithIcon.types';

export const Feedback = () => {
  const handleChangeSelect = (value: unknown) => {
    console.log(`selected ${value}`);
  };

  return (
    <Container>
      <Styled.Container>
        <Styled.Group>
          <DatePicker placeholder='Дата' />
          <PrimarySelect
            options={[
              { value: 'python', label: 'Python' },
              { value: 'frontend', label: 'Frontend' },
            ]}
            onChange={handleChangeSelect}
            placeholder='Курс'
          />
          <PrimarySelect
            options={[
              { value: 'value1', label: 'Тема 1' },
              { value: 'value2', label: 'Тема 2' },
            ]}
            onChange={handleChangeSelect}
            placeholder='Тема'
          />
        </Styled.Group>
        <Styled.Group>
          <ButtonWithIcon icon={EIcon.reset} title='Сбросить фильтр' />
        </Styled.Group>
      </Styled.Container>
      <Summary course='PYTHON PRO' averageRating='4.99' commentsCount='10052' />
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </Container>
  );
};
