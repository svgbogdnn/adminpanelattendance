import React, { ChangeEvent } from 'react'
import * as Styled from './ColoredCheckbox.styled';

type ColoredCheckboxProps = {
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const ColoredCheckbox = ({
  id,
  name,
  value,
  checked,
  onChange,
  className,
}: ColoredCheckboxProps) => {
  const props = {
    id,
    name,
    value,
    checked,
    onChange,
  };

  return (
    <Styled.Label className={className}>
      <Styled.Checkbox type='checkbox' {...props} />
      <Styled.CustomCheckbox>
        {checked ? 'Присутствовал' : 'Отсутствовал'}
      </Styled.CustomCheckbox>
    </Styled.Label>
  );
}