import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxMain = styled.div`
  width: 80%;
  height: 82%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ActionToLogin = styled.p<{ fontColor: string; linkColor: string }>`
  width: 100%;
  text-align: center;
  font-size: 3.4vw;
  color: ${(props) => props.fontColor};

  button {
    color: ${(props) => props.linkColor};
    background-color: transparent;
    border: none;
  }
`;

export const BoxTitles = styled.div`
  width: 100%;
`;
