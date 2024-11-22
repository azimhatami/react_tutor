import {Header} from './components/Header/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList/LocationList';
import AppLayout from './components/AppLayout/AppLayout';
import Hotels from './components/Hotels/Hotels';
import SingleHotel from './components/SingleHotel/SingleHotel';
import BookmarkLayout from './components/BookmarkLayout/BookmarkLayout';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HotelsProvider from './components/context/HotelsProvider';
import BookmarkProvider from './components/context/BookmarkListContext';
import Bookmark from './components/Bookmark/Bookmark';


function App() {

  return (
    <>
      <BookmarkProvider>
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
            <Route path='/bookmark' element={<BookmarkLayout />}>
              <Route index element={<Bookmark />} />
              <Route path=':id' element={<div>Single bookmark</div>} />
              <Route path='add' element={<div>Add new bookmark</div>} />
            </Route>
          </Routes>
        </HotelsProvider>
      </BookmarkProvider>
    </>
  )
}

export default App
