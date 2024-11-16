import {Header} from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList/LocationList';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Toaster />
      <Header />
      {/* <LocationList /> */}
      <Routes>
        <Route path='/' element={<LocationList />} />
      </Routes>
    </>
  )
}

export default App
