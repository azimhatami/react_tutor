import { Header } from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HotelsProvider from "./components/context/HotelsProvider";
import BookmarkProvider from "./components/context/BookmarkListContext";
import Bookmark from "./components/Bookmark/Bookmark";
import SingleBookmark from "./components/SingleBookmark/SingleBookmark";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark";
import Login from "./components/Login/Login";
import AuthProvider from "./components/context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BookmarkProvider>
          <HotelsProvider>
            <Toaster />
            <Header />
            {/* <LocationList /> */}
            <Routes>
              <Route path="/" element={<LocationList />} />
              <Route path="/hotels" element={<AppLayout />}>
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHotel />} />
              </Route>
              <Route path="/bookmark" element={<ProtectedRoute><BookmarkLayout /></ProtectedRoute>}>
                <Route index element={<Bookmark />} />
                <Route path=":id" element={<SingleBookmark />} />
                <Route path="add" element={<AddNewBookmark />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </HotelsProvider>
        </BookmarkProvider>
      </AuthProvider>
    </>
  );
}

export default App;
