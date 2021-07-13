import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
`;

export const BoxMain = styled.div`
  width: 34%;
  height: 88%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    width: 54%;
    height: 84%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 78%;
  }

  @media screen and (max-width: 600px) {
    width: 78%;
    height: 90%;
  }

  @media screen and (max-width: 414px) {
    width: 80%;
    height: 90%;
  }
`;

export const BoxTitles = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;
