import styled from 'styled-components';

export const BoxInput = styled.div<{ borderColor: string }>`
  width: 100%;
  border: 0.13rem dashed ${(props) => props.borderColor};
  height: 11vw;
  border-radius: 50px;
  margin-bottom: 7vw;
  position: relative;
`;

export const LabelInput = styled.span<{ bgColor: string }>`
  position: absolute;
  font-size: 3vw;
  top: -20%;
  left: 6%;
  padding: 0 0.6em 0 0.4em;
  background-color: ${(props) => props.bgColor};
`;

export const InputField = styled.input<{ bgColor: string; fontColor: string }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  outline: none;
  padding: 0 4vw;
  font-size: 4vw;
  border: none;
`;
