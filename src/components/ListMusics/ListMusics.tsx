import React, { ReactElement } from 'react';
import { music } from '../../types/music';
import CardMusic from '../CardMusic/CardMusic';

import { Container } from './styles';

interface Props {
  musics: music[];
  fontColor: string;
  bgColor: string;
  userName: string;
}

export default function ListMusics({
  musics,
  fontColor,
  bgColor,
  userName,
}: Props): ReactElement {
  return (
    <Container>
      {musics.map((music) => (
        <CardMusic
          userName={userName}
          fontColor={fontColor}
          bgColor={bgColor}
          music={music}
        />
      ))}
    </Container>
  );
}
