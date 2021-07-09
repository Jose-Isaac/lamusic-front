import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
  }
`;

export const BoxMain = styled.div`
  width: 34%;
  height: 88%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 42%;
    height: 62%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 78%;
  }

  @media screen and (max-width: 600px) {
    width: 74%;
  }

  @media screen and (max-width: 414px) {
    width: 80%;
    height: 82%;
  }
`;

export const ActionToLogin = styled.p<{ fontColor: string; linkColor: string }>`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.fontColor};

  button {
    color: ${(props) => props.linkColor};
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  @media screen and (max-width: 1204px) {
    font-size: 1.3rem;

    button {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 414px) {
    font-size: 0.9rem;
    margin-top: 2rem;
    button {
      font-size: 0.9rem;
    }
  }
`;

export const BoxTitles = styled.div`
  width: 100%;

  @media screen and (max-width: 414px) {
    margin-bottom: 4rem;
  }
`;
