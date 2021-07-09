import styled from 'styled-components';

export const BoxInput = styled.div<{ borderColor: string }>`
  width: 100%;
  border: 0.13rem dashed ${(props) => props.borderColor};
  height: 3rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 3.6rem;
    margin-bottom: 2.4rem;
  }

  @media screen and (max-width: 414px) {
    height: 3rem;
    margin-bottom: 2rem;
  }
`;

export const LabelInput = styled.span<{ bgColor: string; fontColor: string }>`
  position: absolute;
  font-size: 0.9rem;
  letter-spacing: 1px;
  top: -19%;
  left: 5%;
  padding: 0 0.4em 0 0.2em;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const InputField = styled.input<{ bgColor: string; fontColor: string }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  outline: none;
  padding: 0 1em;
  font-size: 1rem;
  border: none;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;
