import React, { useContext } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';

import { Container } from './styles';

const DashboardPage: React.FC = () => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container bgColor={theme.background.primary}>
      <Dashboard theme={theme} />
    </Container>
  );
};

export default DashboardPage;
