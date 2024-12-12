import { Container } from '@src/components/Container';
import React from 'react'
import * as Styled from './Attendance.styled';
import { SecondaryButton } from '@src/components/SecondaryButton';
import { PrimaryTable } from '@src/components/PrimaryTable';
import { columns, tableValues } from './Attendance.constants';
import { PrimarySelect } from '@src/components/PrimarySelect';
import { ButtonWithIcon } from '@src/components/ButtonWithIcon';
import { EIcon } from '@src/components/ButtonWithIcon/ButtonWithIcon.types';
import { DatePicker } from '@src/components/DatePicker';

export const Attendance = () => {
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
              { value: 'attend', label: 'Присутствовал' },
              { value: 'absrnt', label: 'Отсутствовал' },
            ]}
            onChange={handleChangeSelect}
            placeholder='Статус занятия'
          />
        </Styled.Group>
        <Styled.Group>
          <ButtonWithIcon icon={EIcon.reset} title='Сбросить фильтр' />
        </Styled.Group>
      </Styled.Container>
      <Styled.Buttons>
        <SecondaryButton title='Отметить всех присутствующими' />
        <SecondaryButton title='Отметить всех отсутствующими' />
      </Styled.Buttons>
      <PrimaryTable data={tableValues} columns={columns} />
    </Container>
  );
};
