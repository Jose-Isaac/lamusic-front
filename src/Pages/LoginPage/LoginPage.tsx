import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';
import { Login } from '../../components/Login/Login';

import { Container } from './styles';

const LoginPage: React.FC = () => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container bgColor={theme.background.primary}>
      <Login theme={theme}></Login>
    </Container>
  );
};

export { LoginPage };
