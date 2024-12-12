import React, { InputHTMLAttributes } from 'react';
import * as Styled from './TextInput.styled';

type TextInputProps = {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  classname?: string;
  error?: boolean;
  isValid?: boolean;
  isFullWidth?: boolean;
};

export const TextInput = ({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  value,
  error,
  isValid,
  isFullWidth,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & TextInputProps) => {
  return (
    <Styled.InputWrapper $isFullWidth={!!isFullWidth}>
      {!!label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}
      <Styled.Input
        {...inputProps}
        id={id}
        type={type}
        autoComplete={autoComplete}
        ref={null}
        value={value}
        placeholder={placeholder}
        $error={!!error}
        $isValid={!!isValid}
        $isFullWidth={!!isFullWidth}
      />
    </Styled.InputWrapper>
  );
};
