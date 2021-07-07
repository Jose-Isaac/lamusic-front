import React from 'react';
import { themeStructure } from '../../types/themeStructure';
import { signupFormField } from '../../types/form';
import TitleSign from '../TitleSign/TitleSign';
import SubTitleSign from '../SubTitleSign/SubTitleSign';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { useForm } from '../../Hooks/useForm';

import { Container, BoxMain, BoxTitles, ActionToLogin } from './styles';

interface SignupProps {
  theme: themeStructure;
}

const Signup: React.FC<SignupProps> = ({ theme }) => {
  const initialState: signupFormField = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const { form, onChange } = useForm(initialState);
  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>Sign Up</TitleSign>
          <SubTitleSign fontColor={theme.font.secondary}>
            Create your account
          </SubTitleSign>
        </BoxTitles>

        <Form labelButtonSubmit="Sign Up">
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
          You already have on account ? Login
        </ActionToLogin>
      </BoxMain>
    </Container>
  );
};

export default Signup;
