import React from 'react';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import * as Styled from './RegisterPage.styled';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryCheckbox } from '../../components/PrimaryCheckbox';

export const RegisterPage = () => {
  return (
    <Styled.Container>
      <Header links={[{ title: 'Вернуться назад', path: '/main' }]} />
      <Content title='Регистрация' links={[{ title: 'Уже есть аккаунт? Войти', path: '/login' }]}>
        <Styled.Form autoComplete='off'>
          <TextInput id='name' placeholder='ФИО' autoComplete='off' isFullWidth/>
          <TextInput id='email' placeholder='Номер телефона' autoComplete='off' isValid isFullWidth/>
          <TextInput id='email' type='email' placeholder='Почта' autoComplete='off' isFullWidth/>
          <TextInput id='password' type='password' placeholder='Пароль' autoComplete='off' isFullWidth/>
          <TextInput id='password' type='password' placeholder='Повторите пароль' autoComplete='off' isFullWidth/>
          <PrimaryCheckbox id='accept' name='accept' label='Согласен с политикой сайта' />
          <PrimaryButton type='submit' title='Зарегистрироваться' isFullWidth />
        </Styled.Form>
      </Content>
    </Styled.Container>
  );
};
