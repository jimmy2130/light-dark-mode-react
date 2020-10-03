import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import {
  ThemeSwitchWrapper,
  ToggleIcon,
  ToggleText,
  ThemeSwitch,
  CheckBox,
  RoundSlider,
  Icon  
} from './dark-mode-switch.styles';

const DarkModeSwitch = ({ theme, toggleTheme }) => {
  return (
    <ThemeSwitchWrapper>
      <ToggleIcon>
        <ToggleText>
        {
          theme === 'light' ? 'Light Mode' : 'Dark Mode'
        }
        </ToggleText>        
        <Icon icon={
          theme === 'light' ? faSun : faMoon
        }
        />
      </ToggleIcon>
      <ThemeSwitch>
        <CheckBox type="checkbox" onChange={toggleTheme}
          checked={
            theme === 'light' ? false : true
          }
        />
        <RoundSlider/>
      </ThemeSwitch>
    </ThemeSwitchWrapper>
  );
};

export default DarkModeSwitch;