import React, { ReactElement } from 'react';
import { album } from '../../types/album';

import { Container, Name } from './styles';

interface Props {
  album: album;
  fontColor: string;
  bgColor: string;
}

export default function CardAlbum({
  album,
  bgColor,
  fontColor,
}: Props): ReactElement {
  return (
    <Container key={album.id} bgColor={bgColor}>
      <Name fontColor={fontColor}>{album.name}</Name>
    </Container>
  );
}
