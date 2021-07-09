import React from 'react';
import { themeStructure } from '../../types/themeStructure';
import { signupFormField } from '../../types/form';
import TitleSign from '../TitleSign/TitleSign';
import SubTitleSign from '../SubTitleSign/SubTitleSign';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { useForm } from '../../Hooks/useForm';

import { Container, BoxMain, BoxTitles, ActionToLogin } from './styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';

interface SignupProps {
  theme: themeStructure;
}

const Signup: React.FC<SignupProps> = ({ theme }) => {
  const initialState: signupFormField = {
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const history = useHistory();
  const { form, onChange } = useForm(initialState);

  //TODO pesquisar como tipar o history do react-router
  // Após pesq
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>Sign Up</TitleSign>
          <SubTitleSign fontColor={theme.font.secondary}>
            Create your account
          </SubTitleSign>
        </BoxTitles>

        <Form onSubmit={onSubmit} labelButtonSubmit="Sign Up">
          <Input
            label="Name"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            type="text"
            name="name"
            required={true}
          />
          <Input
            label="Nickname"
            placeholder="nickname"
            value={form.nickname}
            onChange={onChange}
            type="text"
            name="nickname"
            required={true}
          />
          <Input
            label="Email"
            placeholder="email@email.com"
            value={form.email}
            onChange={onChange}
            type="email"
            name="email"
            required={true}
          />
          <Input
            label="Password"
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            onChange={onChange}
            type="password"
            name="password"
            required={true}
          />
          <Input
            label="Confirm password"
            placeholder="Confirme a senha anterior"
            value={form.confirmPassword}
            onChange={onChange}
            type="password"
            name="confirmPassword"
            required={true}
          />
        </Form>

        <ActionToLogin
          fontColor={theme.font.secondary}
          linkColor={theme.font.primary}
        >
          You already have on account ?{' '}
          <button onClick={() => history.push('/login')}>Login</button>
        </ActionToLogin>
      </BoxMain>
    </Container>
  );
};

export default Signup;
