import React from 'react';
import { Routes, Route} from 'react-router-dom';
import PathToRoute from '../src/PathToRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import NavbarPage from '../src/common/NavbarPage';


const RoutesApp = () => {
    return (
        <>
        <Routes>
         <Route path={PathToRoute.Index} element={<NavbarPage />} /> 
        <Route path={PathToRoute.Index} element={<Index />} />
       <Route path={PathToRoute.About} element={<About />} />
       <Route path={PathToRoute.Contact} element={<Contact/>} />
        </Routes>
        </>
        
    )
}
export default RoutesApp;