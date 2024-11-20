import {Header} from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList/LocationList';
import AppLayout from './components/AppLayout/AppLayout';
import Hotels from './components/Hotels/Hotels';
import SingleHotel from './components/SingleHotel/SingleHotel';
import Bookmark from './components/Bookmark/Bookmark';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HotelsProvider from './components/context/HotelsProvider';


function App() {

  return (
    <>
      <HotelsProvider>
      <Toaster />
      <Header />
      {/* <LocationList /> */}
      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path='/hotels' element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=':id' element={<SingleHotel />} />
        </Route>
        <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
      </HotelsProvider>
    </>
  )
}

export default App
