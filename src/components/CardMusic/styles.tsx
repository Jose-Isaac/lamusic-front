import styled from 'styled-components';

export const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
`;

export const Title = styled.p<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AuthorName = styled.p<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  margin-top: 0.6rem;
  font-size: 0.9rem;
`;
