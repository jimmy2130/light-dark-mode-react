import React from 'react';
import {
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  TextBox,
  Paragraph
} from './project-section.styles';

const ProjectSection = () => {
  return(
    <section id="projects">
      <h1>Buttons</h1>
      <ButtonContainer>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <PrimaryButton disabled>Disabled</PrimaryButton>
        <OutlineButton>Outline</OutlineButton>
        <OutlineButton className="secondary">Alt Outline</OutlineButton>
        <OutlineButton disabled>Disabled</OutlineButton>
      </ButtonContainer>
      <TextBox id="text-box">
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias unde rem possimus architecto numquam sed hic eius soluta quo labore, nesciunt deserunt autem modi blanditiis molestias nisi enim ipsam quod?</Paragraph>
      </TextBox>
    </section>
  );
}

export default ProjectSection;