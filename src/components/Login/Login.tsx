import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';
import { useForm } from '../../Hooks/useForm';
import { signFormField, signinFormField } from '../../types/form';
import { themeStructure } from '../../types/themeStructure';
import { InformationForClickAction } from '../InformationForClickAction/InformationForClickAction';
import TitleSign from '../TitleSign/TitleSign';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { ReactComponent as LoginIllustration } from '../../illustrations/undraw_Login_re_4vu2.svg';

import { Container, BoxMain, BoxTitles, BoxIllustration } from './styles';

interface LoginProps {
  theme: themeStructure;
}

const Login: React.FC<LoginProps> = ({ theme }) => {
  const initialState: signFormField = {
    email: '',
    password: '',
  };
  const history = useHistory();
  const [error, setError] = useState<signFormField>(initialState);
  const [form, onChange] = useForm<signinFormField>(initialState);

  //TODO pesquisar como tipar o history do react-router
  // Após pesquisa refatorar esse trecho
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentError = { ...initialState };
    let hashError = false;

    if (form.password.trim() === '') {
      currentError.password = 'empty password filed';
      form.password = '';
      hashError = true;
    }

    if (form.password.length < 6) {
      currentError.password = 'minimum password length is six characters';
      hashError = true;
    }

    if (!hashError) {
      axios
        .post(`${BASE_URL}/users/login`, form)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          history.push('/dashboard');
        })
        .catch((err) => {
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
          <TitleSign fontColor={theme.font.primary}>Welcome Back!</TitleSign>
        </BoxTitles>

        <BoxIllustration>
          <LoginIllustration />
        </BoxIllustration>

        <Form labelButtonSubmit="Login" onSubmit={onSubmit}>
          <Input
            label="email"
            placeholder="email@email.com"
            value={form.email}
            type="email"
            name="email"
            required={true}
            onChange={onChange}
            errorMessage={error['email']}
          />
          <Input
            label="password"
            placeholder="minimum six characters"
            value={form.password}
            type="password"
            name="password"
            required={true}
            onChange={onChange}
            errorMessage={error['password']}
          />
        </Form>

        <InformationForClickAction
          fontColor={theme.font.secondary}
          linkColor={theme.font.primary}
          labelLink="Sign Up"
          goToPage="/signup"
        >
          Don't have an account ?
        </InformationForClickAction>
      </BoxMain>
    </Container>
  );
};

export { Login };
