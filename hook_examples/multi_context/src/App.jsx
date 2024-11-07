import Providers from './components/Providers';
import WelcomePanel from './components/WelcomePanel';
import ToggleTheme from './components/ToggleTheme';

import './App.css'


function App() {

  return (
    <>
      <Providers>
        <WelcomePanel />
        <ToggleTheme />
      </Providers>
    </>
  )
}

export default App;

