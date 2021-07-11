import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonAction, Container } from './styles';

interface InformationForClickActionProps {
  fontColor: string;
  linkColor: string;
  goToPage: string;
  labelLink: string;
  children: React.ReactNode;
}
const InformationForClickAction: React.FC<InformationForClickActionProps> = ({
  fontColor,
  linkColor,
  goToPage,
  labelLink,
  children,
}) => {
  const history = useHistory();
  return (
    <Container fontColor={fontColor}>
      {children}
      <ButtonAction
        onClick={() => history.push(goToPage)}
        linkColor={linkColor}
      >
        {labelLink}
      </ButtonAction>
    </Container>
  );
};

export { InformationForClickAction };
