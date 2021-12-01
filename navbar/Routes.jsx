import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PathToRoute from './PathToRoute';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Index from './src/pages/index';

const Routes = () => {
    return (
        <>
        <Routes>
        <Route path={PathToRoute.index} element={<Index />} />
           <Route path={PathToRoute.About} element={<About />} />
          <Route path={PathToRoute.Contact} element={<Contact/>} />
          
        </Routes>
        </>
    )
}
export default Routes;