import React, { useState } from 'react';
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
  const [error, setError] = useState<signupFormField>(initialState);
  const { form, onChange } = useForm(initialState);

  //TODO pesquisar como tipar o history do react-router
  // Após pesq
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentError = { ...initialState };
    let hashError = false;

    if (form.name.trim() === '') {
      currentError.name = 'empty name field';
      form.name = '';
      hashError = true;
    }

    if (form.nickname.trim() === '') {
      currentError.nickname = 'empty nickname field';
      form.nickname = '';
      hashError = true;
    }

    if (form.password.trim() === '') {
      currentError.password = 'empty password filed';
      form.password = '';
      hashError = true;
    }

    if (form.password.length < 6) {
      currentError.password = 'minimum password length is six characters';
      hashError = true;
    }

    if (form.confirmPassword.trim() === '') {
      currentError.confirmPassword = 'empty confirm password field';
      form.confirmPassword = '';
      hashError = true;
    }

    if (form.password !== form.confirmPassword) {
      currentError.confirmPassword =
        'confirmation password is different from password';
      hashError = true;
    }

    if (!hashError) {
      console.log('entrou');
      axios
        .post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          history.push('/');
        })
        .catch((err) => {
          console.log('passou');
          const errorMessage = err.response.data.message;
          let wasTreated = false;

          if (errorMessage.includes('nickname')) {
            currentError.nickname = 'Sorry, nickname already in use';
            wasTreated = true;
          }

          if (errorMessage.includes('email')) {
            currentError.email = errorMessage;
            wasTreated = true;
          }

          if (!wasTreated) alert(errorMessage);

          setError({ ...currentError });
        });
    } else {
      setError({ ...currentError });
    }
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
            errorMessage={error['name']}
          />
          <Input
            label="Nickname"
            placeholder="nickname"
            value={form.nickname}
            onChange={onChange}
            type="text"
            name="nickname"
            required={true}
            errorMessage={error['nickname']}
          />
          <Input
            label="Email"
            placeholder="email@email.com"
            value={form.email}
            onChange={onChange}
            type="email"
            name="email"
            required={true}
            errorMessage={error['email']}
          />
          <Input
            label="Password"
            placeholder="minimum six characters"
            value={form.password}
            onChange={onChange}
            type="password"
            name="password"
            required={true}
            errorMessage={error['password']}
          />
          <Input
            label="Confirm password"
            placeholder="confirm previous password"
            value={form.confirmPassword}
            onChange={onChange}
            type="password"
            name="confirmPassword"
            required={true}
            errorMessage={error['confirmPassword']}
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
