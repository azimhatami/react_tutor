import Panel from './components/Panel';
import MyProviders from './components/MyProviders';
import WelcomePanel from './components/WelcomePanel';
import {useState, createContext} from 'react';
import './App.css'

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <MyProviders theme={theme} setTheme={setTheme}>
        <WelcomePanel />
        <label>
          <input 
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>
      </MyProviders>
    </>
  )
}

export default App
