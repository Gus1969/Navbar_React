import React from 'react';
import { Routes, Route} from 'react-router-dom';
import PathToRoute from '../src/PathToRoute';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




const RoutesApp = () => {
    return (
       <>
        <Routes>
        
        
        <Route path={PathToRoute.Home} element={<Home />} />
       <Route path={PathToRoute.About} element={<About />} />
       <Route path={PathToRoute.Contact} element={<Contact/>} />
        </Routes>
        </>
        
        
    )
}
export default RoutesApp;