import styled from 'styled-components';

export const BoxForm = styled.form`
  width: 100%;
`;

export const ButtonSubmit = styled.button<{
  bgColor: string;
  fontColor: string;
}>`
  width: 100%;
  margin-top: 6vh;
  border-radius: 50px;
  height: 6vh;
  font-size: 2vh;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-weight: 600;
  cursor: pointer;
`;
