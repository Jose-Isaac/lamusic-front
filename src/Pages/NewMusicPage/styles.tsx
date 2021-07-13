import styled from 'styled-components';

export const Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  height: 100%;
  overflow: auto;
  font-family: 'Poppins', sans-serif;
`;
