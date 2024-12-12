import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

dayjs.locale('ru');

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ConfigProvider
        locale={ruRU}
        theme={{
          components: {
            Table: {
              cellPaddingBlock: 22,
              headerBg: '#323D4E',
              colorBgContainer: '#273142',
              colorSplit: 'transparent',
              headerColor: '#fffffff2',
              stickyScrollBarBg: '#323D4E',
              stickyScrollBarBorderRadius: 100,
              borderColor: '#e0e0e033',
              lineWidth: 0.6,
              colorText: '#ffffffe6',
            },
            Select: {
              optionActiveBg: '#323D4E',
              optionSelectedBg: '#323D4E',
              selectorBg: '#323D4E',
              colorBorder: '#FFFFFFCC',
              activeBorderColor: '#FFFFFFCC',
              hoverBorderColor: '#FFFFFFCC',
              colorText: '#ffffff',
              colorTextPlaceholder: '#FFFFFFCC',
              colorIcon: 'red',
              fontFamily: 'Monocraft',
              fontWeightStrong: 500,
              fontSize: 12,
            },
            DatePicker: {
              colorText: '#ffffff',
              colorLink: '#ffffff',
              activeBg: '#323D4E',
              activeBorderColor: '#FFFFFFCC',
              cellBgDisabled: '#cccccc',
              cellHeight: 24,
              cellHoverBg: '#00B69B',
              hoverBg: '#323D4E',
              hoverBorderColor: '#FFFFFFCC',
              fontFamily: 'Actay',
              fontWeightStrong: 400,
              fontSize: 15,
              inputFontSize: 12,
              paddingBlock: 10,
              paddingInline: 16,
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
}
