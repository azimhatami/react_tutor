import { useState, useContext, createContext } from 'react';

const UserContext = createContext(null);

export function UserProvider({children}) {
  const [user, setUser] = useState(null);
  return(
    <>
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserContext was used outside of UserProvider');
  }
  return context;
}
