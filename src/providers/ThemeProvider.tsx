import React, { createContext, useState } from 'react';

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
// @ts-ignore
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, ThemeDispatchContext };
