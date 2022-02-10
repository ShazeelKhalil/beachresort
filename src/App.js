// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Room from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
