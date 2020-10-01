import React from 'react';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/global-styles";
import { lightTheme, darkTheme } from "./components/themes";
import Toggle from "./components/toggler.js";
// import './App.css';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </div>
    </ThemeProvider>
  );
}

export default App;
