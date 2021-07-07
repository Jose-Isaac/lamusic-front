import styled from 'styled-components';

export const SubTitle = styled.h3<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 4vw;
  margin-top: 5vw;
`;
