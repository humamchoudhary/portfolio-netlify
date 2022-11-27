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

const App = () => {
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/Portfolio" element={<PortFolioDetails />} />
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>

      </HashRouter>

    </>
  )
}

export default App