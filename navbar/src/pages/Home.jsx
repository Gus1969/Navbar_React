import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from "../common/NavbarPage";
import MainBody from '../common/MainBody';


 const Home = () => {
     return (
         <>
        <NavbarPage />
        <h2> Home page</h2>
        <MainBody />
        </>
       
     )
 };
  export default Home;
