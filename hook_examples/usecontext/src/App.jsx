import { createContext, useState } from 'react';
import Form from './components/Form';
import './App.css'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input 
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </ThemeContext.Provider>
    </>
  )
}

export default App
