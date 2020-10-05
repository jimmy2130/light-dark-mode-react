import React from 'react';
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
  faMedium,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Icon } from './contact-section.styles';

const ContactSection = () => {
  return(
    <section id="contact">
      <div>
        <Icon icon={faGithub}></Icon>
        <Icon icon={faCodepen}></Icon>
        <Icon icon={faLinkedinIn}></Icon>
        <Icon icon={faMedium}></Icon>
        <Icon icon={faInstagram}></Icon>
        <Icon icon={faYoutube}></Icon>
      </div>
    </section>
  );
}

export default ContactSection;