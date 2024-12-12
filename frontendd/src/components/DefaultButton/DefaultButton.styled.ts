import styled from "styled-components";

export const Button = styled.button`
  min-width: 130px;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  background-color: #00B69B;
  color: #ffffff;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
