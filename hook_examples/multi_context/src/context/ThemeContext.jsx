import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');
  return(
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}


export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('ThemeContext was used outside of ThemeProvider');
  }
  return context;
}
