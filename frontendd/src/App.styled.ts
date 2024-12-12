import { createGlobalStyle } from "styled-components";
import NunitoSansExtraBold from './assets/fonts/NunitoSans_7pt_Expanded-ExtraBold.ttf';
import NunitoSansBold from './assets/fonts/NunitoSans_7pt_Expanded-Bold.ttf';
import NunitoSansSemiBold from './assets/fonts/NunitoSans_7pt_Expanded-SemiBold.ttf';
import ActayWideBold from './assets/fonts/ActayWide-Bold.otf';
import ActayRegular from './assets/fonts/Actay-Regular.otf';
import Monocraft from './assets/fonts/Monocraft.otf';


export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${NunitoSansExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${NunitoSansBold}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${NunitoSansSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Actay Wide';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${ActayWideBold}) format('opentype');
  }

  @font-face {
    font-family: 'Actay';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${ActayRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Monocraft';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${Monocraft}) format('opentype');
  }

  body {
    margin: 0;
    background-color: #1b2431;
    font-family: Actay, Helvetica, Arial, sans-serif;
    color: #ffffff;

    & *::-webkit-scrollbar {
      height: 16px;
      width: 16px;
      background: transparent !important;
    }

    & *::-webkit-scrollbar-track {
      background-color: transparent !important;
    }

    & *::-webkit-scrollbar-thumb {
      background-color: #323D4E !important;
      border: 4px solid transparent;
      border-radius: 8px;
      background-clip: padding-box;
    }

    & *::-webkit-scrollbar-corner {
      background-color: transparent !important;
    }
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .ant-picker {
    padding: 8px 16px;
  }

  .ant-picker-outlined {
    background: #323D4E;
  }

  .ant-picker.ant-picker-multiple {
    max-width: 241px;
  }

  .ant-picker .ant-picker-input > input {
    color: #ffffff;
    font-family: Monocraft;
    font-size: 12px;
    line-height: 1.1;
  }

  .ant-picker .ant-picker-input > input::placeholder {
    color: #FFFFFFCC;
    font-family: Monocraft;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.1;
  }

  .ant-picker.ant-picker-multiple .ant-picker-selector .ant-picker-selection-placeholder {
    color: #FFFFFFCC;
    font-family: Monocraft;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.1;
  }

  .ant-picker .ant-picker-clear {
    color: #ffffff;

    &:hover {
      color: #ffffff;
    }
  }

  .ant-picker .ant-picker-suffix {
    color: #ffffff;

    &:hover {
      color: #ffffff;
    }
  }

  .ant-picker-outlined.ant-picker-multiple .ant-picker-selection-item {
    background: #00B69B;
  }

  .ant-picker.ant-picker-multiple .ant-picker-selection-overflow .ant-picker-selection-item-remove {
    color: #ffffff;
  }

  .ant-picker-dropdown .ant-picker-panel-container {
    background-color: #273142;
  }

  .ant-picker-dropdown {
    .ant-picker-body, .ant-picker-header {
      background-color: #273142;
      color: #ffffff;

      button {
        color: #ffffff;
        font-family: Actay;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.2;
        transition: opacity 0.3s ease-in-out; 

        &:hover {
          color: #ffffff;
          opacity: 0.7;
        }
      }
    }

    .ant-picker-header-view >button:hover {
      color: #00B69B;
    }
  
    .ant-picker-cell:not(.ant-picker-cell-in-view) {
      color: #aaaaaa;
    }
  
    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
      border: 1px solid #00B69B;
    }
  
    .ant-picker-cell-in-view.ant-picker-cell-selected:not(.ant-picker-cell-disabled) .ant-picker-cell-inner {
      background: #00B69B;
    }

    .ant-picker-footer {
      background: #273142;
      border-top: 0.4px solid #979797;
    }
  }
`;
