import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import * as Styled from './LoginPage.styled';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [isError, setError] = useState(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigator = useNavigate()

  const handleClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    console.log(login);
    console.log(password)
    if (login === "" && password === "") {
      navigator('/content')
    }
    try{
      const response = await axios.post('/login', {
      email: login,
      password: password
    });
    console.log(response)
    if (response.status === 200) {
      navigator('/content')
    }
    else {
      setError(true);
    }
    }
    catch (error) {
      setError(true)
    }
  };


  return (
    <Styled.Container>
      <Header links={[{ title: 'Вернуться назад', path: '/main'  }]} />
      <Content title='Вход' links={[{ title: 'Нет аккаунта? Зарегистрироваться', path: '/singin'  }, { title: 'Забыли пароль?',  path: '/changepass'  }]}>
        <Styled.Form autoComplete='off'>
          {!!isError && <Styled.ErrorMessage>Введен неверный пароль. Попробуйте еще раз</Styled.ErrorMessage>}
          <TextInput id='email' placeholder='Почта/телефон' autoComplete='off' error={isError} isFullWidth onChange={(e)=>setLogin(e.target.value)}/>
          <TextInput id='password' type='password' placeholder='Пароль' autoComplete='off' error={isError} isFullWidth onChange={(e)=>setPassword(e.target.value)}/>
          <PrimaryButton type='submit' title='Войти' onClick={handleClick} isFullWidth />
        </Styled.Form>
      </Content>
    </Styled.Container>
  );
};
