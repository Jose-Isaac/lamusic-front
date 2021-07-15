import styled from 'styled-components';

export const BoxInput = styled.div<{ borderColor: string }>`
  width: 100%;
  border: 0.13rem dashed ${(props) => props.borderColor};
  height: 3.4rem;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 1.2rem;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
    height: 2.6rem;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label<{ fontColor: string }>`
  width: 100%;
  color: ${(props) => props.fontColor};
  margin-left: 1rem;
  cursor: pointer;
`;
