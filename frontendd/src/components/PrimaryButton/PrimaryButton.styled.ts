import styled from "styled-components";

export const Button = styled.button<{ $isFullWidth: boolean }>`
  width: ${({ $isFullWidth }) => $isFullWidth ? '100%' : 'initial'};
  padding: 17px 15px;
  background-color: #56FF9E;
  border-radius: 6px;
  font-family: Monocraft;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.11;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
