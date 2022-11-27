import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from './components/Home/Home';
import PortFolioDetails from './components/PortFolioDetails/PortFolioDetails';
import Error404 from './components/404/404';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/Portfolio/Portfolio" element={<PortFolioDetails />} />
          <Route path='/Portfolio' element={<Home />} />
          <Route path='/Portfolio/*' element={<Error404 />} />
        </Routes>

      </HashRouter>

    </>
  )
}

export default App