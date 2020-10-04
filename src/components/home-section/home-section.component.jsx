import React from 'react';
import { TitleGroup } from './home-section.styles';

const HomeSection = () => {
  return(
    <section id="home">
      <TitleGroup>
        <h1>Custom Title Here</h1>
        <h2>Welcome to the Website!</h2>
      </TitleGroup>
    </section>
  );
}

export default HomeSection;