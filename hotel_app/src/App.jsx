import {Header} from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList/LocationList';
import AppLayout from './components/AppLayout/AppLayout';
import Hotels from './components/Hotels/Hotels';
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
        <Route path='/hotels' element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=':id' element={<div>Single hotel</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
