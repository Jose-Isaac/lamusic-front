import styled from 'styled-components';

export const Title = styled.h1<{ fontColor: string }>`
  font-size: 8vw;
  color: ${(props) => props.fontColor};
  letter-spacing: 2px;
  font-weight: 400;
`;
