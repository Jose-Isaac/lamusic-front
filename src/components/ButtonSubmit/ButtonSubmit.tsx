import React, { ReactElement } from 'react';

import { Button } from './styles';

interface Props {
  bgColor: string;
  fontColor: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonSubmit({
  bgColor,
  fontColor,
  children,
  onClick,
}: Props): ReactElement {
  return (
    <Button onClick={onClick} bgColor={bgColor} fontColor={fontColor}>
      {children}
    </Button>
  );
}
