import { createContext, useReducer } from 'react'

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false
};

function authReducer(state, action) {
  switch(action.type) {
    case 'login':
      return {
        user: action.payload,
        isAuthenticated: true
      };
    case 'logout':
      return {
        user: null,
        isAuthenticated: false
      };
    default:
      throw new Error('Unknown action')
  }
}

const FAKE_USER = {
  name: 'Azim',
  email: 'user@gmail.com',
  password: '1234'

};

export default function AuthContextProvider({ children }) {
  const [{user, isAuthenticated}, dispatch] = useReducer(authReducer, initialState)

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER })
  }

  function logout() {
    dispatch({ type: 'login' })
  }


  return(
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  );
}
