import styled from "styled-components";

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  min-width: 296px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 20px 0 #60E2FF;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 560px;
  gap: 24px;
`;

export const FormLabel = styled.span`
  flex-shrink: 0;
  font-family: Monocraft;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  color: #56FF9ED9;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
