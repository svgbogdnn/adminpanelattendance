import styled from "styled-components";
import { Select as AntdSelect } from 'antd';

export const SelectWrapper = styled.div`
`;

export const Select = styled(AntdSelect)`
  width: 241px;

  .ant-select-arrow {
    color: #FFFFFFCC !important;
  }
`;

export const OptionsWrapper = styled.div`
  .ant-select-item-option-content {
    color: #ffffff;
    font-family: Actay;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .ant-select-item-option {
    padding: 16px 12px;

    &:hover {
      background-color: #323D4E;
    }
  }
`;
