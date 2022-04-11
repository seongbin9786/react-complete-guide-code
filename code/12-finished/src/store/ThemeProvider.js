import { useState } from 'react';
import ThemeContext from './theme-context';

const DEFAULT_THEME = 'light';

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const changeTheme = (theme) => {
    if (theme == 'light' || theme == 'dark') setTheme(theme);
  };

  const themeContext = {
    currentTheme: theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
