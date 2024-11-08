import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
