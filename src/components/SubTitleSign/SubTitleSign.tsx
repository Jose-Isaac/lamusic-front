import React from 'react';

import { SubTitle } from './styles';

interface SubTitleProps {
  children: React.ReactNode;
  fontColor: string;
}

const SubTitleSign: React.FC<SubTitleProps> = ({ children, fontColor }) => {
  return <SubTitle fontColor={fontColor}>{children}</SubTitle>;
};

export default SubTitleSign;
