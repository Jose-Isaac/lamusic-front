import React from 'react';
import { themeStructure } from '../../types/themeStructure';
import TitleSign from '../TitleSign/TitleSign';
import SubTitleSign from '../SubTitleSign/SubTitleSign';

import { Container, BoxMain, BoxTitles } from './styles';

interface SignupProps {
  theme: themeStructure;
}

const Signup: React.FC<SignupProps> = ({ theme }) => {
  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>Sign Up</TitleSign>
          <SubTitleSign fontColor={theme.font.secondary}>
            Create your account
          </SubTitleSign>
        </BoxTitles>
      </BoxMain>
    </Container>
  );
};

export default Signup;
