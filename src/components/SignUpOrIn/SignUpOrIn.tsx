import React from 'react';
import { themeStructure } from '../../types/themeStructure';
import TitleSign from '../TitleSign/TitleSign';
import { ReactComponent as SignUpOrInIllustration } from '../../illustrations/undraw_compose_music_ovo2.svg';

import {
  Container,
  BoxMain,
  BoxIllustration,
  BoxTexts,
  TextInformations,
  BoxButtonsAction,
  ButtonAction,
} from './styled';
import { useHistory } from 'react-router-dom';

interface SignUpOrInProps {
  theme: themeStructure;
}

const SignUpOrIn: React.FC<SignUpOrInProps> = ({ theme }) => {
  const history = useHistory();
  return (
    <Container>
      <BoxMain>
        <BoxIllustration>
          <SignUpOrInIllustration />
        </BoxIllustration>

        <BoxTexts>
          <TitleSign fontColor={theme.font.primary}>Welcome</TitleSign>
          <TextInformations fontColor={theme.font.secondary}>
            Please login or sign up to continue using our app
          </TextInformations>
        </BoxTexts>

        <BoxButtonsAction>
          <ButtonAction
            fontColor={theme.font.secondary}
            bgColor={theme.font.primary}
            borderColor={theme.font.primary}
            onClick={() => history.push('/login')}
          >
            Login
          </ButtonAction>
          <ButtonAction
            fontColor={theme.font.primary}
            bgColor={theme.background.primary}
            borderColor={theme.font.primary}
            onClick={() => history.push('/signup')}
          >
            Sign Up
          </ButtonAction>
        </BoxButtonsAction>
      </BoxMain>
    </Container>
  );
};

export default SignUpOrIn;
