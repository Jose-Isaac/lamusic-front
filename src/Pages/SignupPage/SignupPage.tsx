import React from 'react';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { globalContext } from '../../types/globalContext';
import { Themes } from '../../Themes/Themes';
import Signup from '../../components/Signup/Signup';

import { Container } from './styles';

const SignupPage: React.FC = () => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container bgColor={theme.background.primary}>
      <Signup theme={theme}></Signup>
    </Container>
  );
};

export default SignupPage;
