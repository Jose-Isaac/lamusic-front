import styled from 'styled-components';

export const Container = styled.div<{ fontColor: string }>`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: ${(props) => props.fontColor};
  margin: 1.4rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonAction = styled.button<{ linkColor: string }>`
  color: ${(props) => props.linkColor};
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
