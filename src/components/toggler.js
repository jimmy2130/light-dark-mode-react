import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme['background']};
  border: 2px solid ${({ theme }) => theme['primary-color']};
  color: ${({ theme }) => theme['on-background']};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  outline: none;
  position: fixed;
  bottom: 0px;
  left: 0px;
`;

const Toggle = ({ toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      Switch Theme
    </Button>
  );
};

export default Toggle;