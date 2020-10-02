import styled from 'styled-components';

export const NavBar = styled.nav`
  z-index: 10;
  position: fixed;
  font-family: Oswald, sans-serif;
  font-size: 24px;
  letter-spacing: 3px;
  padding: 25px;
  width: 100vw;
  background: ${({ theme }) => (theme.mode === 'light' ) ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'};
`;

export const NavLink = styled.a`
  margin-right: 25px;
  color: ${({ theme }) => theme['primary-color']};
  text-decoration: none;
  border-bottom: 3px solid transparent;
  font-weight: bold;

  &:hover,
  &.active {
    color: ${({ theme }) => theme['on-background']};
    border-bottom: 3px solid;    
  }

`;