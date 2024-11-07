import { useState } from 'react';
import { ThemeContext, CurrentUserContext } from '../App';

function MyProviders({theme, setTheme, children}) {
  const [currentUser, setCurrentUser] = useState(null);
  return(
    <>
      <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider
          value={{currentUser, setCurrentUser}}
        >
          {children}
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyProviders;
