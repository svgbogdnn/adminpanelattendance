import styled from "styled-components";

export const Form = styled.form`
  width: 32%;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 560px;
  gap: 24px;
  margin-bottom: 24px;
`;

export const FormLabel = styled.span`
  flex-shrink: 0;
  font-family: Monocraft;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  color: #56FF9ED9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

export const Materials = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 50px;
`;

export const Text = styled.span`
  font-family: Actay Wide;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.26;
`;

export const TextUnderline = styled(Text)`
  text-decoration: underline;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
