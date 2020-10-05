import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './utils/useDarkMode';
import { GlobalStyles } from './components/global-styles';
import { lightTheme, darkTheme } from './components/themes';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HomeSection from './components/home-section/home-section.component';
import AboutSection from './components/about-section/about-section.component';
import ProjectSection from './components/project-section/project-section.component';
import ContactSection from './components/contact-section/contact-section.component';
import DarkModeSwitch from './components/dark-mode-switch/dark-mode-switch.component';
// import './App.css';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />
      <NavigationBar />      
      <HomeSection />
      <AboutSection theme={theme}/>
      <ProjectSection />
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;
