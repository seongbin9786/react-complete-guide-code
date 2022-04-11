import React from 'react';

const defaultThemeContextValue = {
  currentTheme: 'light', // light | dark
  changeTheme: () => {
    // do nothing;
  },
};

const ThemeContext = React.createContext(defaultThemeContextValue);

export default ThemeContext;
