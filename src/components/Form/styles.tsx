import styled from 'styled-components';

export const BoxForm = styled.form`
  width: 100%;
`;

export const ButtonSubmit = styled.button<{
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
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    height: 3.2rem;
  }
`;
