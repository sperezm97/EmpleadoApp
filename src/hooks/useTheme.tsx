import React from 'react';
import Theme, { Theme as TypeTheme } from 'theme';

const ThemeContext = React.createContext<TypeTheme>(Theme);

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
