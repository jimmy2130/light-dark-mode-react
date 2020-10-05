import React from 'react';
import proudCoderLight from '../../img/undraw_proud_coder_light.svg';
import proudCoderDark from '../../img/undraw_proud_coder_dark.svg';
import feelingProudLight from '../../img/undraw_feeling_proud_light.svg';
import feelingProudDark from '../../img/undraw_feeling_proud_dark.svg';
import conceptualIdeaLight from '../../img/undraw_conceptual_idea_light.svg';
import conceptualIdeaDark from '../../img/undraw_conceptual_idea_dark.svg';
import {
  AboutContainer,
  ImageContainer,
  Image
} from './about-section.styles';

const AboutSection = ({ theme }) => {
  return(
    <section id="about">
      <h1>Undraw Illustrations</h1>
      <AboutContainer>
        <ImageContainer>
          <h2>Web Innovation</h2>
          <Image src={
            theme === 'light' ? proudCoderLight : proudCoderDark
          } alt="Proud Coder" />
        </ImageContainer>
        <ImageContainer>
          <h2>Problem Solving</h2>
          <Image src={
            theme === 'light' ? feelingProudLight : feelingProudDark
          } alt="Feeling Proud" />
        </ImageContainer>
        <ImageContainer>
          <h2>High Concept</h2>
          <Image src={
            theme === 'light' ? conceptualIdeaLight : conceptualIdeaDark
          } alt="Idea" />
        </ImageContainer>
      </AboutContainer>
    </section>
  )
}

export default AboutSection;