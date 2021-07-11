import React, { useContext } from 'react';
import SignUpOrIn from '../../components/SignUpOrIn/SignUpOrIn';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';

import { Container } from './styled';

const SignUpOrInPage: React.FC = () => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container bgColor={theme.background.primary}>
      <SignUpOrIn theme={theme} />
    </Container>
  );
};

export default SignUpOrInPage;
