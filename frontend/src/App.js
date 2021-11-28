import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style.css';
import React from 'react';
import Home from "./pages/home";
import Cities from "./pages/cities";
import City from './pages/city'

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/city/:id" element={<City/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

}



