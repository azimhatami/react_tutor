import { useState } from 'react';
import Form from './components/Form';
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <Form theme={theme}/>
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
    </>
  )
}

export default App
