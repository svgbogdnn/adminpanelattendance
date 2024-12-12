import { LabeledValue } from '@src/types';
import React from 'react';
import * as Styled from './PrimarySelect.styled';

type PrimarySelectProps = {
  options: LabeledValue[];
  onChange: (value: unknown) => void;
  placeholder?: string;
};

export const PrimarySelect = ({ options, onChange, placeholder }: PrimarySelectProps) => {
  return (
    <Styled.Select
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      dropdownStyle={{
        border: '0',
        boxShadow: '0 2px 6px 2px #00000026',
        backgroundColor: '#273142',
        padding: 0,
      }}
      dropdownRender={(menu) => (
        <Styled.OptionsWrapper>
          {menu}
        </Styled.OptionsWrapper>
      )}
    />
  );
};
