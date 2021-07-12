import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxMain = styled.div`
  width: 28%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    width: 35%;
  }

  @media screen and (max-width: 1024px) {
    width: 54%;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 78%;
    height: 70%;
  }

  @media screen and (max-width: 414px) {
    width: 80%;
  }
`;

export const BoxTexts = styled.div`
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    line-height: 1.4rem;
    font-weight: 600;
  }
`;

export const TextInformations = styled.p<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  margin-top: 2rem;
`;

export const BoxIllustration = styled.div`
  width: 100%;
  height: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const BoxButtonsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonAction = styled.button<{
  fontColor: string;
  bgColor: string;
  borderColor: string;
}>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  width: 45%;
  border-radius: 50px;
  font-size: 1.1rem;
  height: 3.4rem;
  border: 2px solid ${(props) => props.borderColor};
  cursor: pointer;
`;
