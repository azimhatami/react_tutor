import {Header} from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList/LocationList';
import './App.css'

function App() {

  return (
    <>
      <Toaster />
      <Header />
      <LocationList />
    </>
  )
}

export default App
