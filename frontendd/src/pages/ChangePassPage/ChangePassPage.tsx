import React from 'react';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import * as Styled from './ChangePassPage.styled';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';

export const ChangePassPage = () => {
  return (
    <Styled.Container>
      <Header links={[{ title: 'Вернуться назад', path: '/main' }]} />
      <Content title='Смена пароля'>
        <Styled.Form autoComplete='off'>
          <TextInput id='name' placeholder='ФИО' autoComplete='off' isFullWidth />
          <TextInput id='email' placeholder='Почта/телефон' autoComplete='off' isFullWidth/>
          <TextInput id='password' type='password' placeholder='Новый пароль' autoComplete='off' isFullWidth/>
          <TextInput id='password' type='password' placeholder='Повторите пароль' autoComplete='off' isFullWidth/>
          <PrimaryButton type='submit' title='Войти' isFullWidth />
        </Styled.Form>
      </Content>
    </Styled.Container>
  );
};
