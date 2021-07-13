import React, { ReactElement, useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';
import NewMusic from '../../components/NewMusic/NewMusic';

import { Container } from './styles';

export default function NewMusicPage(): ReactElement {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container bgColor={theme.background.primary}>
      <NewMusic theme={theme} />
    </Container>
  );
}
