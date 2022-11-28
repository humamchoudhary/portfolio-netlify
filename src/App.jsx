import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from './components/Home/Home';
import PortFolioDetails from './components/PortFolioDetails/PortFolioDetails';
import Error404 from './components/404/404';
import ProjectDetails from './components/ProJectDetails/ProjectDetails';
import { HelmetProvider } from 'react-helmet-async'


const App = () => {


  return (
    <>
      <HelmetProvider>

        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/Portfolio" element={<PortFolioDetails />} />
            <Route path='/Projects/:id' element={<ProjectDetails />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>

        </HashRouter>
      </HelmetProvider>

    </>
  )
}

export default App