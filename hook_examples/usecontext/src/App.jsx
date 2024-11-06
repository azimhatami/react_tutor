import Form from './components/Form';
import ToggleTheme from './components/ToggleTheme';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'


function App() {
  return (
    <>
      <ThemeProvider>
        <Form />
        <ToggleTheme />
      </ThemeProvider>
    </>
  )
}

export default App

