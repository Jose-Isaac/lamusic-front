import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 10vh 0;
`;

export const BoxMain = styled.div`
  width: 34%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    width: 54%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
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

export const Form = styled.form`
  width: 100%;
`;
