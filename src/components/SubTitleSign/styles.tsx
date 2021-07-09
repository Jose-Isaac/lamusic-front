import styled from 'styled-components';

export const SubTitle = styled.h3<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 1.2rem;
  margin-top: 2vw;

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    margin-top: 2.8vw;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
    margin-top: 4vw;
  }
`;
