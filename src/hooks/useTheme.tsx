import React from 'react';
import Theme, { Theme as TypeTheme } from 'theme';

const ThemeContext = React.createContext<TypeTheme>(Theme);

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
