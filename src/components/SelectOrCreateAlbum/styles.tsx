import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TextOpenForm = styled.p<{
  fontColor: string;
  linkColor: string;
}>`
  width: 100%;
  text-align: center;
  font-size: 1.16rem;
  color: ${(props) => props.fontColor};
  margin: 1.4rem 0 2rem 0;

  @media screen and (max-width: 1400px) {
    font-size: 0.96rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  button {
    color: ${(props) => props.linkColor};
    background-color: transparent;
    border: none;
    font-size: 1.16rem;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
      font-size: 0.96rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const Form = styled.form`
  button {
    margin: 0;
    font-size: 1.4rem;
    height: 3.4rem;
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1400px) {
      font-size: 1rem;
      height: 2.8rem;
    }

    @media screen and (max-width: 414px) {
      height: 2.4rem;
    }
  }
`;
