import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style.css';
import React from 'react';
import Home from "./pages/home";
import Cities from "./pages/cities";
import City from './pages/city'
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/city/:id" element={<City/>}/>
            <Route path="/auth/signIn" element={< SignIn/>} />
            <Route path="/auth/signUp" element={< SignUp/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

}



