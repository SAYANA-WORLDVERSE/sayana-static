import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
