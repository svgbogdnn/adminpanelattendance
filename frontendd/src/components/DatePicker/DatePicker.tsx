import React from 'react';
import * as Styled from './DatePicker.styled';
import { DefaultButton } from '../DefaultButton';

type DatePickerOptions = {
  multiple?: boolean;
  placeholder?: string;
};

export const DatePicker = ({ multiple, placeholder = 'Выберите дату' }: DatePickerOptions) => {
  return (
    <Styled.CustomDatePicker
      multiple={multiple}
      maxTagCount="responsive"
      format="DD.MM.YYYY"
      placeholder={placeholder}
      renderExtraFooter={() => (
        <Styled.FooterContainer>
          <Styled.Text>*Вы можете выбрать несколько дат</Styled.Text>
          <DefaultButton title='Выбрать' />
        </Styled.FooterContainer>
      )}
    />
  );
};
