import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

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

// function useTheme() {
//   return(
//     useContext(ThemeContext)
//   );
// }

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('ThemeContext was used of ThemeProvider')
  };
  return context;
}
