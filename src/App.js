import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import Registration from "./Components/Registration/Registration";
import Sign from "./Components/Sign/Sign";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/home'  element={<Home />} />
      <Route path='/'  element={<Home />} />
        <Route path="/login" element={<Sign />}>
        
        </Route>
        <Route path='/registration'  element={<Registration />} />
        
        <Route path="/profile/:Uid" element={<Profile/>}/> 
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
