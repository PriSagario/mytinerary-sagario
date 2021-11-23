import React from 'react';
import Home from "./pages/home";
import Cities from "./pages/cities"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

}



