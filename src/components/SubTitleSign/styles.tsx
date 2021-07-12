import styled from 'styled-components';

export const SubTitle = styled.h3<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 1.4rem;
  margin-top: 1.4rem;

  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
