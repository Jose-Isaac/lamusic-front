import styled from 'styled-components';

export const Button = styled.button<{
  bgColor: string;
  fontColor: string;
}>`
  width: 100%;
  border-radius: 50px;
  height: 3.6rem;
  font-size: 1.6rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 1.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
    height: 3rem;
  }

  @media screen and (max-width: 414px) {
    height: 3.2rem;
  }
`;
