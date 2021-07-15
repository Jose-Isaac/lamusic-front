import React, { ReactElement } from 'react';

import { Button } from './styles';

interface Props {
  bgColor: string;
  fontColor: string;
  children: React.ReactNode;
}

export default function ButtonSubmit({
  bgColor,
  fontColor,
  children,
}: Props): ReactElement {
  return (
    <Button bgColor={bgColor} fontColor={fontColor}>
      {children}
    </Button>
  );
}
