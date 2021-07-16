import styled from 'styled-components';

export const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
`;

export const Name = styled.p<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 1.1rem;
  font-weight: 500;
`;
