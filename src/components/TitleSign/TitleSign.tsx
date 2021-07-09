import React from 'react';

import { Title } from './styles';

interface TitleProps {
  children: React.ReactNode, 
  fontColor: string
}

const TitleSign: React.FC<TitleProps> = ({children, fontColor}) => {
  return <Title fontColor={fontColor}>{children}</Title>;
}

export default TitleSign;