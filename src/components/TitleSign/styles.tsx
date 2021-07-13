import styled from 'styled-components';

export const Title = styled.h1<{ fontColor: string }>`
  font-size: 2.2rem;
  color: ${(props) => props.fontColor};
  letter-spacing: 2px;
  font-weight: 400;

  @media screen and (max-width: 1400px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
