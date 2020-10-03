import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './utils/useDarkMode';
import { GlobalStyles } from './components/global-styles';
import { lightTheme, darkTheme } from './components/themes';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import DarkModeSwitch from './components/dark-mode-switch/dark-mode-switch.component';
// import './App.css';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <NavigationBar />
      <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
