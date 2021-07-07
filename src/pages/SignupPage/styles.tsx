import styled from 'styled-components'

export const Container = styled.div<{bgColor: string, fontColor: string}>`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  font-family: 'Poppins', sans-serif;
`