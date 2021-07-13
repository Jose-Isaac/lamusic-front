import React, { ReactElement } from 'react';
import { music } from '../../types/music';

import { Container, Title, AuthorName } from './styles';

interface Props {
  music: music;
  fontColor: string;
  bgColor: string;
  userName: string;
}

export default function CardMusic({
  music,
  bgColor,
  fontColor,
  userName,
}: Props): ReactElement {
  return (
    <Container key={music.id} bgColor={bgColor}>
      <Title fontColor={fontColor}>{music.title}</Title>
      <AuthorName fontColor={fontColor}>{userName}</AuthorName>
    </Container>
  );
}
