import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0 8px;
`;

export const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + span {
    background-color: #00B69B;
  }
`;

export const CustomCheckbox = styled.span`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 36px;
  background-color: #FF8743;
  border-radius: 100px;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  position: relative;
  transition: 0.3s ease-in-out;
  transition-property: background-color, opacity;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
