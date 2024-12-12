import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ $isFullWidth: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;
  width: ${({ $isFullWidth }) => $isFullWidth ? '100%' : 'initial'};
`;

export const Label = styled.label`
  font-family: Monocraft;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  color: #56FF9ED9;
`;

export const Input = styled.input<{$error: boolean; $isValid: boolean; $isFullWidth: boolean}>`
  width:  ${({ $isFullWidth }) => $isFullWidth ? '100%' : '210px'};
  padding: 10px 12px;
  background-color: transparent;
  font-family: Monocraft;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.11;
  border: 1px solid #ffffff99;
  border-radius: 6px;
  color: #ffffff;

  &::placeholder {
    color: #ffffff99;
    font-family: Monocraft;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.11;
  }

  ${({ $error }) => {
    if ($error) {
      return css`
        color: #F93C65;
        border: 1px solid #F93C65;

        &::placeholder {
          color: #F93C65;
        }
      `;
    }

    return null;
  }}

${({ $isValid }) => {
    if ($isValid) {
      return css`
        color: #56FF9E;
        border: 1px solid #56FF9E;

        &::placeholder {
          color: #56FF9E;
        }
      `;
    }

    return null;
  }}
`;
