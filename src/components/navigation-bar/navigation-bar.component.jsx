import React from 'react';
import { NavBar, NavLink } from './navigation-bar.styles';

const NavigationBar = () => {
  return(
    <NavBar>
      <NavLink href="#home">HOME</NavLink>
      <NavLink href="#about">ABOUT</NavLink>
      <NavLink href="#projects">PROJECTS</NavLink>
      <NavLink href="#contact">CONTACT</NavLink>
    </NavBar>
  );
};

export default NavigationBar;