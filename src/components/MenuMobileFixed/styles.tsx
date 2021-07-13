import styled from 'styled-components';

export const Menu = styled.nav<{ bgColor: string }>`
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: ${(props) => props.bgColor};
`;

export const ListMenuItem = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.6rem 0 0.4rem;
`;

export const BoxMenuItem = styled.button<{ fill: string }>`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${(props) => props.fill};
    border: 2px solid ${(props) => props.fill};
    border-radius: 6px;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
  }
`;

export const MenuItemButton = styled.span<{
  fontColor: string;
}>`
  width: 100%;
  font-size: 0.9rem;
  color: ${(props) => props.fontColor};
  font-family: 'Poppins', sans-serif;
`;
