import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payments from "./components/Payments";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='profile' element={<Profile />}/>
            <Route path='payments' element={<Payments />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
