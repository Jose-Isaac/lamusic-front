import React, { ReactElement } from 'react';
import { themeStructure } from '../../types/themeStructure';
import TitleSign from '../TitleSign/TitleSign';

import { Container, BoxMain, BoxTitles } from './styles';

interface Props {
  theme: themeStructure;
}

export default function NewMusic({ theme }: Props): ReactElement {
  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>New Music</TitleSign>
        </BoxTitles>
      </BoxMain>
    </Container>
  );
}
